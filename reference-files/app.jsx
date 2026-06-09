/* App — router + page-turn animation + paper rustle SFX + Tweaks */

const { useState, useEffect, useRef, useCallback, useMemo } = React;

/* ===== TWEAK DEFAULTS (editable on disk) ===== */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "turnMs": 900,
  "turnStyle": "book",
  "sound": true,
  "soundVolume": 0.35,
  "showCornerMarks": true,
  "homePalette": "teal"
}/*EDITMODE-END*/;

/* ===== Screen registry ===== */
const SCREENS = {
  home: HomeScreen,
  projects: ProjectsScreen,
  "project-detail": ProjectDetailScreen,
  manual: FieldManualScreen,
  experience: ExperienceScreen,
  stack: StackScreen,
  contact: ContactScreen,
};

/* ===== Paper rustle generator =====
 * Two short pink-noise bursts spaced by a tiny pause — softer than a single hit,
 * filtered through a bandpass to sit in the "paper" range, with a slow attack/release.
 */
function makePaperRustle() {
  let ctx = null;
  function ensure() {
    if (!ctx) {
      try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return null; }
    }
    return ctx;
  }
  // Pink-noise via simple Voss-McCartney-ish accumulator
  function fillPinkNoise(d) {
    let b0=0,b1=0,b2=0,b3=0,b4=0,b5=0,b6=0;
    for (let i = 0; i < d.length; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      const pink = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
      b6 = white * 0.115926;
      d[i] = pink;
    }
  }
  return function play(volume = 0.35) {
    const ac = ensure(); if (!ac) return;
    if (ac.state === "suspended") ac.resume();
    const now = ac.currentTime;
    const sr = ac.sampleRate;
    const totalDur = 0.85;

    // Build a single noise buffer with a smooth two-peak envelope
    const buf = ac.createBuffer(1, Math.floor(sr * totalDur), sr);
    const d = buf.getChannelData(0);
    fillPinkNoise(d);

    // Apply a soft envelope: two gaussian peaks at ~0.18s and ~0.45s + a gentle tail.
    for (let i = 0; i < d.length; i++) {
      const t = i / sr;
      const g1 = Math.exp(-((t - 0.18) ** 2) / (2 * 0.10 ** 2));
      const g2 = 0.55 * Math.exp(-((t - 0.46) ** 2) / (2 * 0.16 ** 2));
      const env = Math.min(1, g1 + g2);
      d[i] *= env;
    }

    const src = ac.createBufferSource();
    src.buffer = buf;

    // Subtle bandpass to sit in the "paper" band
    const bp = ac.createBiquadFilter();
    bp.type = "bandpass"; bp.frequency.value = 3200; bp.Q.value = 0.85;
    const lp = ac.createBiquadFilter();
    lp.type = "lowpass"; lp.frequency.value = 7800;

    const g = ac.createGain();
    // gentle attack/release so it never "pops"
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(volume * 0.9, now + 0.04);
    g.gain.exponentialRampToValueAtTime(0.0001, now + totalDur);

    src.connect(bp); bp.connect(lp); lp.connect(g); g.connect(ac.destination);
    src.start(now);
    src.stop(now + totalDur + 0.05);
  };
}
const playPaperRustle = makePaperRustle();

/* ===== Page-turn component =====
 * 2D diagonal fold: outgoing page is clipped along a moving fold-line
 * from bottom-right toward top-left; a flap element (paper-back texture)
 * grows in the freshly-cleared corner; the incoming page sits underneath.
 */
function PageTurn({ activeId, projectId, soundOn, soundVolume, turnMs, turnStyle, showCornerMarks, go }) {
  const [current, setCurrent] = useState({ id: activeId, projectId });
  const [prev, setPrev] = useState(null);
  const [turning, setTurning] = useState(false);

  // when activeId changes, start a turn
  useEffect(() => {
    if (activeId === current.id && (activeId !== "project-detail" || projectId === current.projectId)) return;
    setPrev(current);
    setCurrent({ id: activeId, projectId });
    setTurning(true);
    if (soundOn) playPaperRustle(soundVolume);
    const t = setTimeout(() => {
      setTurning(false);
      setPrev(null);
    }, turnMs + 40);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId, projectId]);

  const renderScreen = (rec) => {
    const Comp = SCREENS[rec.id] || HomeScreen;
    return <Comp go={go} projectId={rec.projectId} />;
  };

  return (
    <div className="stage" style={{ "--turn-ms": `${turnMs}ms` }}>
      <div className={`page-stack ${turning ? "turning" : ""}`}>
        {/* INCOMING (underneath) */}
        <div className="page-layer incoming" style={{ zIndex: 1 }}>
          {renderScreen(current)}
        </div>

        {prev && (
          <>
            {/* OUTGOING — clipped along the moving fold-line */}
            {turnStyle === "wipe" ? (
              <WipeReveal turnMs={turnMs}>{renderScreen(prev)}</WipeReveal>
            ) : (
              <>
                <div className="page-layer outgoing-page" style={{ zIndex: 2 }}>
                  {renderScreen(prev)}
                </div>
                {/* Paper-back flap covering the folded corner */}
                <div className="page-layer fold-flap" style={{ zIndex: 3 }} />
              </>
            )}
          </>
        )}
      </div>

      {!showCornerMarks && <style>{`.page::before,.page::after{display:none}`}</style>}
    </div>
  );
}

/* Wipe variant — outgoing page gets clip-pathed away from bottom-right to top-left */
function WipeReveal({ children, turnMs }) {
  return (
    <div style={{
      position: "absolute", inset: 0,
      animation: `wipeClip ${turnMs}ms ease-in-out forwards`,
      "--turn-ms": `${turnMs}ms`,
    }}>
      {children}
      <style>{`@keyframes wipeClip {
        0% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
        100% { clip-path: polygon(0 0, 0 0, 0 100%); }
      }`}</style>
    </div>
  );
}

/* ===== Audio prompt: tell user once that clicking enables sound (autoplay policy) ===== */
function AudioHint() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
    const t = setTimeout(() => setShow(false), 4500);
    return () => clearTimeout(t);
  }, []);
  return <div className={`audio-hint ${show ? "show" : ""}`}>Click anywhere to enable paper rustle</div>;
}

/* ===== Main App ===== */
function App() {
  // tweaks state via hook
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  // current screen — keep history of project-detail id
  const [route, setRoute] = useState({ id: "home", projectId: "001" });

  const go = useCallback((id, opts = {}) => {
    setRoute(r => {
      const next = { ...r, id };
      if (opts.id) next.projectId = opts.id;
      // If switching back to project-detail without an explicit id, keep the previous one
      return next;
    });
  }, []);

  // Keyboard shortcut: Esc -> home, arrows cycle pages (for fun & accessibility)
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") go("home");
      if (e.key === "ArrowRight") {
        const order = ["home", "projects", "experience", "stack", "manual", "contact"];
        const i = order.indexOf(route.id);
        if (i >= 0) go(order[(i + 1) % order.length]);
      }
      if (e.key === "ArrowLeft") {
        const order = ["home", "projects", "experience", "stack", "manual", "contact"];
        const i = order.indexOf(route.id);
        if (i >= 0) go(order[(i - 1 + order.length) % order.length]);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [route.id, go]);

  return (
    <>
      <PageTurn
        activeId={route.id}
        projectId={route.projectId}
        soundOn={tweaks.sound}
        soundVolume={tweaks.soundVolume}
        turnMs={tweaks.turnMs}
        turnStyle={tweaks.turnStyle}
        showCornerMarks={tweaks.showCornerMarks}
        go={go}
      />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Page Turn">
          <TweakRadio label="Style" value={tweaks.turnStyle} onChange={v => setTweak("turnStyle", v)} options={[
            { value: "book", label: "Book Fold" },
            { value: "wipe", label: "Wipe" },
          ]} />
          <TweakSlider label="Duration" value={tweaks.turnMs} onChange={v => setTweak("turnMs", v)} min={400} max={1800} step={50} suffix="ms" />
        </TweakSection>
        <TweakSection title="Sound">
          <TweakToggle label="Paper rustle" value={tweaks.sound} onChange={v => setTweak("sound", v)} />
          <TweakSlider label="Volume" value={tweaks.soundVolume} onChange={v => setTweak("soundVolume", v)} min={0} max={1} step={0.05} />
        </TweakSection>
        <TweakSection title="Marks">
          <TweakToggle label="Corner ticks" value={tweaks.showCornerMarks} onChange={v => setTweak("showCornerMarks", v)} />
        </TweakSection>
        <TweakSection title="Quick Travel">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
            {[
              ["home", "Home"], ["projects", "Projects"], ["project-detail", "Case Study"],
              ["experience", "Experience"], ["stack", "Stack"], ["manual", "Manual"], ["contact", "Contact"],
            ].map(([id, label]) => (
              <TweakButton key={id} label={label} onClick={() => go(id)} />
            ))}
          </div>
        </TweakSection>
      </TweaksPanel>

      <AudioHint />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
