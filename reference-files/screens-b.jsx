// Field Manual, Experience, Stack, Contact screens

// ===================================================================
// FIELD MANUAL (Résumé)
// ===================================================================
function FieldManualScreen({ go }) {
  return (
    <div className="page" style={{
      background: "var(--mustard)", color: "var(--teal-deep)",
    }}>
      <div className="grain" />
      <div className="page-inner" style={{ borderColor: "var(--teal-deep)" }}>
        <TopNav go={go} current="manual" palette={{ ink: "var(--teal-deep)" }} />

        {/* Cream sheet inset on mustard */}
        <div style={{
          flex: 1, padding: "clamp(16px, 3vw, 28px)",
          display: "flex", flexDirection: "column", minHeight: 0,
        }}>
        <div style={{
          background: "var(--c-cream)",
          border: "1px solid var(--teal-deep)",
          flex: 1, display: "flex", flexDirection: "column",
          minHeight: 0, overflow: "hidden",
          boxShadow: "0 18px 40px rgba(20,15,5,.22)",
        }}>
        {/* Header */}
        <div style={{
          padding: "22px 30px 16px",
          borderBottom: "1px solid var(--teal-deep)",
          display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: 16,
          flexShrink: 0,
        }}>
          <div className="mono" style={{ fontSize: 11, color: "var(--teal-deep)", lineHeight: 1.7 }}>
            <div>Ref No. 892-A</div>
            <div>Dept. of Frontend Engineering</div>
          </div>
          <h1 className="display" style={{ fontSize: "clamp(34px, 4.4vw, 64px)", margin: 0, color: "var(--teal-deep)", letterSpacing: ".02em", whiteSpace: "nowrap" }}>FIELD MANUAL</h1>
          <div className="mono" style={{ fontSize: 11, color: "var(--teal-deep)", lineHeight: 1.7, textAlign: "right" }}>
            <div>Status: Active</div>
            <div>Clearance: Level 5</div>
          </div>
        </div>

        {/* Body */}
        <div style={{ flex: 1, overflow: "auto", padding: "22px 30px 16px", display: "grid", gridTemplateColumns: "minmax(220px, 320px) 1fr", gap: "clamp(16px, 3vw, 36px)" }}>
          {/* Polaroid portrait */}
          <div style={{ position: "relative", paddingTop: 18, paddingBottom: 18 }}>
            <Illus.Tape angle={-12} color="#D89B95" style={{ top: 0, left: -8 }} />
            <Illus.Tape angle={18} color="#D89B95" style={{ bottom: 0, right: -8 }} />
            <div style={{
              background: "var(--c-cream-deep)", padding: 10,
              boxShadow: "0 8px 28px rgba(0,0,0,.18)",
              transform: "rotate(-1.5deg)",
            }}>
              <div style={{ border: "1.5px solid var(--teal-deep)", position: "relative", aspectRatio: "4 / 5", overflow: "hidden" }}>
                <Illus.Portrait />
                <div className="mono" style={{
                  position: "absolute", bottom: 8, left: 8, padding: "3px 8px",
                  background: "var(--c-cream)", color: "var(--teal-deep)", fontSize: 9,
                }}>Fig 1.1 : The Subject</div>
                <div style={{
                  position: "absolute", bottom: 8, right: 8,
                  width: 26, height: 26, borderRadius: 999, background: "var(--wine)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--c-cream)", fontFamily: "var(--mono)", fontSize: 9,
                }}>★</div>
              </div>
            </div>
          </div>

          {/* Dossier */}
          <div>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", borderBottom: "1px solid var(--teal-deep)", paddingBottom: 6, marginBottom: 18, gap: 12 }}>
              <h2 className="display" style={{ fontSize: "clamp(18px, 2.2vw, 26px)", margin: 0, color: "var(--teal-deep)", whiteSpace: "nowrap" }}>DOSSIER INFORMATION</h2>
              <div className="mono" style={{ fontSize: 10, opacity: .7, whiteSpace: "nowrap" }}>FILE: 2024-DEV</div>
            </div>

            <DossierRow label="Subject" value={<span style={{ fontFamily: "var(--serif-display)", fontWeight: 700, fontSize: 24 }}>ARTHUR P. CODEWRIGHT</span>} />
            <DossierRow label="Years Active" value={<span style={{ fontFamily: "var(--serif-body)", fontStyle: "italic", fontSize: 19 }}>12 Years in Field</span>} />
            <DossierRow label="Rank" value={<span style={{ fontFamily: "var(--serif-body)", fontStyle: "italic", fontSize: 19 }}>Senior Architect</span>} />
            <DossierRow label="Specialties" value={
              <div style={{ display: "flex", gap: 8 }}>
                {["Architecture", "Scale", "Refinement"].map(t => (
                  <span key={t} className="mono" style={{
                    fontSize: 10, padding: "5px 9px", border: "1px solid var(--teal-deep)",
                  }}>{t}</span>
                ))}
              </div>
            } />
            <DossierRow label="Observations" value={
              <div style={{ borderLeft: "2px solid var(--teal-deep)", paddingLeft: 14, fontFamily: "var(--serif-body)", fontStyle: "italic", fontSize: 16, lineHeight: 1.45 }}>
                "The subject displays an unusual affinity for clean code and pixel-perfect implementation. Often found organizing component libraries by color and function. Approach with complex problems."
              </div>
            } noBorder />

            {/* Equipment & Tools */}
            <div style={{
              border: "1px solid var(--teal-deep)", padding: "22px 18px 16px",
              marginTop: 22, position: "relative",
            }}>
              <div className="mono" style={{
                position: "absolute", top: -10, left: "50%", transform: "translateX(-50%)",
                background: "var(--c-cream)", padding: "0 12px", color: "var(--teal-deep)", fontSize: 11,
              }}>Equipment &amp; Tools</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
                {[
                  { name: "React.js", sub: "v18.0", icon: "{}" },
                  { name: "Node.js", sub: "Runtime", icon: ">_" },
                  { name: "Rust", sub: "Systems", icon: "☁" },
                  { name: "SQL", sub: "Database", icon: "▤" },
                  { name: "AWS", sub: "Infra", icon: "◆" },
                ].map((t, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <div style={{
                      width: 46, height: 46, borderRadius: 999,
                      border: "1.5px solid var(--teal-deep)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      margin: "0 auto 8px", fontFamily: "var(--mono)", fontWeight: 700, fontSize: 16,
                      color: "var(--teal-deep)",
                    }}>{t.icon}</div>
                    <div className="mono" style={{ fontSize: 10 }}>{t.name}</div>
                    <div className="italic" style={{ fontSize: 12, opacity: .7 }}>{t.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer band */}
        <div style={{
          padding: "12px 30px", borderTop: "1px solid var(--teal-deep)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexShrink: 0,
        }}>
          <div style={{ display: "flex", gap: 22, flexWrap: "wrap" }}>
            <button onClick={() => go("home")} className="mono" style={{ fontSize: 11, color: "var(--teal-deep)", whiteSpace: "nowrap" }}>Return Home</button>
            <button onClick={() => go("contact")} className="mono" style={{ fontSize: 11, color: "var(--teal-deep)", whiteSpace: "nowrap" }}>Contact HQ</button>
          </div>
          <div className="mono" style={{ fontSize: 9, opacity: .6 }}>Approved by the High Council of Code</div>
        </div>
        </div>{/* /cream sheet */}
        </div>{/* /padded area */}
      </div>

      <CornerTicks color="var(--teal-deep)" />
    </div>
  );
}

function DossierRow({ label, value, noBorder }) {
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "140px 1fr",
      gap: 22, padding: "14px 0",
      borderBottom: noBorder ? "none" : "1px solid var(--teal-deep)55",
      alignItems: "start",
    }}>
      <div className="mono" style={{ fontSize: 10, color: "var(--teal-deep)", opacity: .85 }}>{label}</div>
      <div style={{ color: "var(--teal-deep)" }}>{value}</div>
    </div>
  );
}

// ===================================================================
// EXPERIENCE (Forest green)
// ===================================================================
const EXPERIENCE = [
  { year: "2023 — Present", title: "Senior Staff Engineer", company: "Hôtel Monolith", location: "Remote · Zubrowka", desc: "Steward of the design-system, mentor to twelve juniors, custodian of the type scale. Led the platform's third rewrite, this one apparently for keeps.", tags: ["React", "Next.js", "Design Systems"] },
  { year: "2020 — 2023", title: "Engineering Lead", company: "Société Aquatique", location: "Remote · Lisbon", desc: "Shipped the marquee analytics product, presented to a board that included one (1) actual yacht-owner. Built the team from four to seventeen.", tags: ["Node", "GraphQL", "Postgres"] },
  { year: "2017 — 2020", title: "Senior Engineer", company: "The Grand Atelier", location: "On-site · Berlin", desc: "Owned the checkout flow that carried a tenth of European cycling-goods commerce. Once fixed a memory leak with a calendar invite.", tags: ["TypeScript", "Stripe", "Performance"] },
  { year: "2014 — 2017", title: "Software Engineer", company: "Studio Suzuki", location: "On-site · Kyoto", desc: "First job, second cup of coffee. Built the typography engine and several small, well-loved bugs.", tags: ["Ruby", "CSS", "Patience"] },
];

function ExperienceScreen({ go }) {
  return (
    <div className="page" style={{ background: "var(--forest)", color: "var(--c-cream)" }}>
      <div className="grain" />
      <div className="page-inner" style={{ borderColor: "var(--c-cream)55" }}>
        <TopNav go={go} current="experience" palette={{ ink: "var(--c-cream)" }} />

        <div style={{ flex: 1, overflow: "auto", padding: "38px 64px 40px" }}>
          {/* Heading */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "end", borderBottom: "1px solid var(--c-cream)", paddingBottom: 20, marginBottom: 38 }}>
            <div>
              <div className="mono" style={{ fontSize: 11, marginBottom: 10, paddingBottom: 6, borderBottom: "1px solid currentColor", display: "inline-block" }}>Volume III</div>
              <h1 className="display" style={{ fontSize: "clamp(46px, 7.5vw, 110px)", margin: 0, color: "var(--c-cream)" }}>CHRONICLE<br/>OF SERVICE</h1>
            </div>
            <div style={{ fontFamily: "var(--serif-body)", fontStyle: "italic", fontSize: 17, lineHeight: 1.5, paddingLeft: 36, opacity: .9 }}>
              A truthful account of one engineer's professional employments, in chronological order, with appropriate flourishes.
            </div>
          </div>

          {/* Timeline */}
          <div style={{ position: "relative" }}>
            {/* spine */}
            <div style={{
              position: "absolute", left: 168, top: 0, bottom: 0, width: 1,
              background: "var(--c-cream)", opacity: .6,
            }} />
            {EXPERIENCE.map((e, i) => (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "152px 32px 1fr",
                gap: 0, alignItems: "start", marginBottom: 34,
              }}>
                <div className="mono" style={{ fontSize: 11, paddingTop: 8, textAlign: "right", opacity: .9 }}>{e.year}</div>
                <div style={{ position: "relative", height: "100%" }}>
                  <div style={{
                    position: "absolute", left: 16, top: 12,
                    width: 14, height: 14, borderRadius: 999,
                    background: "var(--mustard)", border: "2px solid var(--c-cream)",
                  }} />
                </div>
                <div style={{ paddingLeft: 4 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
                    <h3 className="display" style={{ fontSize: 28, margin: 0 }}>{e.title}</h3>
                    <span className="italic" style={{ fontSize: 17, opacity: .85 }}>at {e.company}</span>
                  </div>
                  <div className="mono" style={{ fontSize: 10, opacity: .75, marginTop: 4 }}>{e.location}</div>
                  <p style={{ fontFamily: "var(--serif-body)", fontSize: 17, lineHeight: 1.5, marginTop: 10, maxWidth: 640 }}>{e.desc}</p>
                  <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap" }}>
                    {e.tags.map(t => (
                      <span key={t} className="mono" style={{
                        fontSize: 9, padding: "4px 9px",
                        border: "1px solid var(--c-cream)88", color: "var(--c-cream)",
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <PageFooter palette={{ ink: "var(--c-cream)" }} />
      </div>
      <CornerTicks color="var(--c-cream)" />
    </div>
  );
}

// ===================================================================
// STACK — inventory of instruments (Wine)
// ===================================================================
const STACK_CATEGORIES = [
  {
    title: "Languages",
    items: [
      { name: "TypeScript", note: "Daily driver", level: 5 },
      { name: "Rust", note: "Systems & CLIs", level: 4 },
      { name: "Python", note: "Data & glue", level: 4 },
      { name: "Go", note: "Services", level: 3 },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", note: "v18, RSC-curious", level: 5 },
      { name: "Next.js", note: "App Router", level: 5 },
      { name: "Svelte", note: "Personal projects", level: 4 },
      { name: "Vue 3", note: "Composition API", level: 3 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", note: "Fastify / tRPC", level: 5 },
      { name: "Postgres", note: "Relational of choice", level: 5 },
      { name: "Redis", note: "Caches & queues", level: 4 },
      { name: "GraphQL", note: "Federation", level: 4 },
    ],
  },
  {
    title: "Operations",
    items: [
      { name: "AWS", note: "Reluctantly fluent", level: 4 },
      { name: "Terraform", note: "Infra-as-code", level: 4 },
      { name: "Docker", note: "Containers", level: 5 },
      { name: "Linux", note: "Daily", level: 5 },
    ],
  },
];

function StackScreen({ go }) {
  return (
    <div className="page" style={{ background: "var(--wine)", color: "var(--c-cream)" }}>
      <div className="grain" />
      <div className="page-inner" style={{ borderColor: "var(--c-cream)55" }}>
        <TopNav go={go} current="stack" palette={{ ink: "var(--c-cream)" }} />

        <div style={{ flex: 1, overflow: "auto", padding: "38px 64px 40px" }}>
          <div style={{ textAlign: "center", marginBottom: 30 }}>
            <div className="mono" style={{ fontSize: 11, marginBottom: 10, paddingBottom: 6, borderBottom: "1px solid currentColor", display: "inline-block" }}>Volume IV</div>
            <h1 className="display" style={{ fontSize: "clamp(46px, 8vw, 110px)", margin: 0, color: "var(--c-cream)" }}>INVENTORY OF INSTRUMENTS</h1>
            <p className="italic" style={{ fontSize: 17, marginTop: 12, opacity: .85, maxWidth: 640, marginInline: "auto" }}>
              A complete itemisation of tools, languages, &amp; assorted curiosities — kept on the workbench at all times.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 30 }}>
            {STACK_CATEGORIES.map((cat, i) => (
              <div key={i} style={{
                border: "1px solid var(--c-cream)88", padding: "18px 22px 20px",
                position: "relative", background: "rgba(255,255,255,.03)",
              }}>
                <div className="mono" style={{
                  position: "absolute", top: -10, left: 18,
                  background: "var(--wine)", padding: "0 10px", fontSize: 11,
                }}>Cabinet {String.fromCharCode(65 + i)} — {cat.title}</div>
                <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 10 }}>
                  <tbody>
                    {cat.items.map((it, j) => (
                      <tr key={j} style={{ borderBottom: j < cat.items.length - 1 ? "1px dashed rgba(245,233,200,.35)" : "none" }}>
                        <td className="mono" style={{ fontSize: 10, opacity: .55, padding: "10px 0", width: 30 }}>{String(j + 1).padStart(2, "0")}</td>
                        <td style={{ padding: "10px 0" }}>
                          <div style={{ fontFamily: "var(--serif-display)", fontWeight: 700, fontSize: 19 }}>{it.name}</div>
                          <div className="italic" style={{ fontSize: 13, opacity: .8 }}>{it.note}</div>
                        </td>
                        <td style={{ padding: "10px 0", textAlign: "right" }}>
                          <Pips n={it.level} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 28, fontFamily: "var(--mono)", fontSize: 10, opacity: .65, textAlign: "center" }}>
            ● ● ● ● ● Mastery &nbsp;·&nbsp; ● ● ● ○ ○ Working knowledge &nbsp;·&nbsp; ● ● ○ ○ ○ Read about it once
          </div>
        </div>

        <PageFooter palette={{ ink: "var(--c-cream)" }} />
      </div>
      <CornerTicks color="var(--c-cream)" />
    </div>
  );
}

function Pips({ n }) {
  return (
    <div style={{ display: "inline-flex", gap: 5 }}>
      {[0,1,2,3,4].map(i => (
        <span key={i} style={{
          width: 9, height: 9, borderRadius: 999,
          background: i < n ? "var(--mustard)" : "transparent",
          border: "1.5px solid var(--mustard)",
        }} />
      ))}
    </div>
  );
}

// ===================================================================
// CONTACT — the Post Office (mauve)
// ===================================================================
function ContactScreen({ go }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("A modest proposal");
  const [msg, setMsg] = React.useState("");
  const [sent, setSent] = React.useState(false);

  function send(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4500);
  }

  return (
    <div className="page" style={{ background: "var(--mauve)", color: "var(--teal-deep)" }}>
      <div className="grain" />
      <div className="page-inner" style={{ borderColor: "var(--teal-deep)" }}>
        <TopNav go={go} current="contact" palette={{ ink: "var(--teal-deep)" }} />

        <div style={{ flex: 1, overflow: "auto", padding: "32px 64px 36px" }}>
          {/* Heading */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "end", borderBottom: "1px solid var(--teal-deep)", paddingBottom: 18, marginBottom: 28 }}>
            <div>
              <div className="mono" style={{ fontSize: 11, marginBottom: 10, paddingBottom: 6, borderBottom: "1px solid currentColor", display: "inline-block" }}>Volume V</div>
              <h1 className="display" style={{ fontSize: "clamp(46px, 7.5vw, 110px)", margin: 0 }}>POST<br/>OFFICE</h1>
            </div>
            <div style={{ fontFamily: "var(--serif-body)", fontStyle: "italic", fontSize: 17, lineHeight: 1.5, opacity: .9, textAlign: "right" }}>
              Letters welcomed.<br/>Telegrams encouraged.<br/>Postcards adored.
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 44 }}>
            {/* Letter form */}
            <form onSubmit={send} style={{
              background: "var(--c-cream)", padding: "30px 32px 28px",
              boxShadow: "0 12px 30px rgba(0,0,0,.18)",
              position: "relative",
            }}>
              {/* postmark */}
              <div style={{
                position: "absolute", top: 18, right: 24,
                width: 84, height: 84, borderRadius: 999,
                border: "2px solid var(--wine)", color: "var(--wine)",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                transform: "rotate(-9deg)", opacity: .85,
              }}>
                <div className="mono" style={{ fontSize: 8 }}>AIR MAIL</div>
                <div className="display" style={{ fontSize: 18 }}>MMXXVI</div>
                <div className="mono" style={{ fontSize: 8 }}>★ ZUBROWKA ★</div>
              </div>

              <div className="mono" style={{ fontSize: 10, marginBottom: 14, opacity: .65 }}>Compose a Letter</div>
              <LetterField label="From" value={name} onChange={setName} placeholder="Your good name" />
              <LetterField label="Return address" value={email} onChange={setEmail} type="email" placeholder="you@somewhere.com" />
              <LetterField label="Concerning" value={subject} onChange={setSubject} />
              <LetterField label="Dispatch" value={msg} onChange={setMsg} multiline placeholder="Dear Arthur,&#10;&#10;I write to you concerning…" />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 22 }}>
                <div className="mono" style={{ fontSize: 9, opacity: .6 }}>
                  {sent ? "✓ Letter posted. Reply within 48 hours." : "Posted via certified courier."}
                </div>
                <button type="submit" style={{
                  padding: "10px 22px", border: "1.5px solid var(--teal-deep)",
                  background: sent ? "var(--teal-deep)" : "transparent",
                  color: sent ? "var(--c-cream)" : "var(--teal-deep)",
                  fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase",
                  transition: "background .25s, color .25s",
                }}>
                  {sent ? "Sent ✓" : "Post Letter →"}
                </button>
              </div>
            </form>

            {/* Side info */}
            <div>
              <InfoBlock title="Directly" lines={["arthur@codewright.studio", "(+1) 415 · 555 · 0142"]} />
              <InfoBlock title="Hours of Reply" lines={["Mon – Thu · 09:00 – 17:00 PT", "Friday · letters only", "Weekends · in the garden"]} />
              <InfoBlock title="Find Me Elsewhere" lines={["GitHub · @codewright", "LinkedIn · /in/codewright", "Twitter · @arthurpc"]} />

              {/* envelope illustration */}
              <div style={{ marginTop: 24, padding: "20px 22px", background: "var(--c-cream)", boxShadow: "0 6px 20px rgba(0,0,0,.12)" }}>
                <svg viewBox="0 0 240 140" style={{ width: "100%", display: "block" }}>
                  <rect x="6" y="20" width="228" height="116" fill="var(--c-cream-deep)" stroke="var(--teal-deep)" strokeWidth="2" />
                  <path d="M6 20 L120 90 L234 20" fill="none" stroke="var(--teal-deep)" strokeWidth="2" />
                  <rect x="186" y="32" width="38" height="44" fill="var(--blush)" stroke="var(--teal-deep)" strokeWidth="2" />
                  <text x="205" y="58" textAnchor="middle" fontFamily="var(--mono)" fontSize="9" fill="var(--teal-deep)">XXVI</text>
                  <g stroke="var(--wine)" strokeWidth="2" opacity=".75">
                    <line x1="18" y1="98" x2="98" y2="98" />
                    <line x1="18" y1="108" x2="78" y2="108" />
                    <line x1="18" y1="118" x2="118" y2="118" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <PageFooter palette={{ ink: "var(--teal-deep)" }} />
      </div>
      <CornerTicks color="var(--teal-deep)" />
    </div>
  );
}

function LetterField({ label, value, onChange, multiline, type = "text", placeholder }) {
  return (
    <label style={{ display: "block", marginBottom: 16 }}>
      <div className="mono" style={{ fontSize: 9, opacity: .65, marginBottom: 5 }}>{label}</div>
      {multiline ? (
        <textarea value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} rows={5} style={fieldStyle()} />
      ) : (
        <input value={value} onChange={e => onChange(e.target.value)} type={type} placeholder={placeholder} style={fieldStyle()} />
      )}
    </label>
  );
}
function fieldStyle() {
  return {
    width: "100%", border: 0, borderBottom: "1px solid var(--teal-deep)",
    background: "transparent", padding: "6px 0",
    fontFamily: "var(--serif-body)", fontStyle: "italic", fontSize: 17,
    color: "var(--teal-deep)", outline: "none", resize: "vertical",
  };
}
function InfoBlock({ title, lines }) {
  return (
    <div style={{ borderTop: "1px solid var(--teal-deep)", padding: "14px 0" }}>
      <div className="mono" style={{ fontSize: 10, marginBottom: 6, opacity: .8 }}>{title}</div>
      {lines.map((l, i) => (
        <div key={i} style={{ fontFamily: "var(--serif-body)", fontSize: 16, lineHeight: 1.45 }}>{l}</div>
      ))}
    </div>
  );
}

Object.assign(window, { FieldManualScreen, ExperienceScreen, StackScreen, ContactScreen, EXPERIENCE, STACK_CATEGORIES });
