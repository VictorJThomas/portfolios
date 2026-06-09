// Shared chrome (top nav, footer, brand) + Home, Projects, Project Detail

const NAV = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "manual", label: "Manual" },
  { id: "contact", label: "Contact" },
];

// ===== Top nav — appears on every screen =====
function TopNav({ go, current, palette }) {
  const ink = palette.ink || "var(--c-cream)";
  const accent = palette.accent || "var(--c-cream)";
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <header style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "18px 28px",
      borderBottom: `1px solid ${ink}33`,
      color: ink, flexShrink: 0,
    }}>
      <button onClick={() => go("home")} title="Home" style={{
        border: `1px solid ${ink}88`, borderRadius: 999,
        padding: "6px 18px", fontFamily: "var(--mono)", fontSize: 10,
        letterSpacing: ".22em", color: ink, textTransform: "uppercase",
        transition: "background .25s",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = `${ink}18`; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}>
        Est. 2014
      </button>

      <nav style={{ display: "flex", gap: 30 }}>
        {NAV.map(n => (
          <button key={n.id} onClick={() => go(n.id)} style={{
            fontFamily: "var(--serif-body)", fontStyle: "italic",
            fontSize: 17, color: ink,
            opacity: current === n.id ? 1 : .78,
            borderBottom: current === n.id ? `1px solid ${ink}` : "1px solid transparent",
            paddingBottom: 2, transition: "opacity .25s, border-color .25s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = 1; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = current === n.id ? 1 : .78; }}
          >{n.label}</button>
        ))}
      </nav>

      <div style={{ display: "flex", gap: 14, alignItems: "center", position: "relative" }}>
        <button title="Theme indicator" style={{
          width: 24, height: 24, borderRadius: 999, border: `1px solid ${ink}88`,
          background: `linear-gradient(135deg, ${ink} 50%, transparent 50%)`,
        }} />
        <button onClick={() => setMenuOpen(o => !o)} style={{
          width: 30, height: 24, display: "flex", flexDirection: "column",
          justifyContent: "space-between", padding: "2px 0",
        }}>
          <span style={{ height: 2, background: ink }} />
          <span style={{ height: 2, background: ink }} />
          <span style={{ height: 2, background: ink }} />
        </button>
        {menuOpen && (
          <div style={{
            position: "absolute", top: 38, right: 0, minWidth: 220,
            background: "var(--c-cream)", color: "var(--c-ink)",
            border: "1px solid rgba(0,0,0,.2)", boxShadow: "0 12px 36px rgba(0,0,0,.3)",
            padding: "16px 18px", zIndex: 50,
          }}>
            <div className="mono" style={{ fontSize: 9, opacity: .6, marginBottom: 10 }}>Index</div>
            {[
              ...NAV,
              { id: "project-detail", label: "Case Study" },
            ].map(item => (
              <button key={item.id} onClick={() => { setMenuOpen(false); go(item.id); }}
                style={{
                  display: "block", width: "100%", textAlign: "left", padding: "6px 0",
                  fontFamily: "var(--serif-body)", fontSize: 17, fontStyle: "italic",
                  borderBottom: "1px solid rgba(0,0,0,.08)",
                }}>{item.label}</button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

// ===== Footer =====
function PageFooter({ palette }) {
  const ink = palette.ink || "var(--c-cream)";
  return (
    <footer style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "16px 28px", borderTop: `1px solid ${ink}33`,
      color: ink, fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".18em",
      textTransform: "uppercase", flexShrink: 0,
    }}>
      <div>© MMXIV — MMXXVI</div>
      <div style={{ display: "flex", gap: 28 }}>
        <span>GitHub</span><span>LinkedIn</span><span>Twitter</span>
      </div>
      <div style={{ textAlign: "right", lineHeight: 1.5 }}>
        <div>Location: Remote</div>
        <div>Status: Available</div>
      </div>
    </footer>
  );
}

// ===================================================================
// HOME SCREEN
// ===================================================================
function HomeScreen({ go }) {
  const palette = { ink: "#F2E8D0", accent: "#E8B7B0" };
  return (
    <div className="page" style={{
      "--page-bg": "var(--teal)", "--page-ink": palette.ink,
      background: "var(--teal)", color: palette.ink,
    }}>
      <div className="grain" />
      <div className="page-inner" style={{ inset: 28, borderColor: `${palette.ink}55` }}>
        <TopNav go={go} current="home" palette={palette} />

        {/* Hero title block */}
        <div style={{
          padding: "22px 28px 0", textAlign: "center", flexShrink: 0,
        }}>
          <div className="display" style={{
            fontSize: "clamp(58px, 11vw, 150px)",
            color: "var(--c-cream)", lineHeight: ".88",
          }}>
            THE<br/>DEVELOPER
          </div>
        </div>

        {/* Hero photo strip — keyboard */}
        <div style={{
          position: "relative",
          margin: "22px 28px 0",
          padding: "14px",
          background: "var(--blush)",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative", aspectRatio: "16 / 6",
            background: "#314B40", overflow: "hidden",
          }}>
            <Illus.Workspace />
            {/* Caption top-right */}
            <div style={{
              position: "absolute", top: 18, right: 22, textAlign: "right",
              color: "#F2E8D0", maxWidth: 240,
            }}>
              <div className="mono" style={{ fontSize: 10, opacity: .85, marginBottom: 4 }}>FIG. 1 — Workspace</div>
              <div style={{ fontFamily: "var(--serif-body)", fontStyle: "italic", fontSize: 16, lineHeight: 1.3 }}>
                Where logic meets whimsy. A curated environment for crafting digital narratives.
              </div>
            </div>
            {/* CURATED CODE card lower-left */}
            <div style={{
              position: "absolute", bottom: 0, left: 0,
              background: "var(--teal-deep)", color: "#F2E8D0",
              padding: "20px 24px", maxWidth: 320,
            }}>
              <div className="mono" style={{ color: "var(--mustard)", fontSize: 11, marginBottom: 8 }}>
                Curated Code
              </div>
              <div style={{ fontFamily: "var(--serif-body)", fontSize: 15.5, lineHeight: 1.45, marginBottom: 14 }}>
                Architecting scalable solutions with the precision of a watchmaker. Specializing in frontend artistry and backend robustness.
              </div>
              <button onClick={() => go("projects")} className="mono" style={{
                color: "#F2E8D0", fontSize: 10,
                borderBottom: "1px solid #F2E8D0", paddingBottom: 4,
              }}>View Case Studies &nbsp;→</button>
            </div>
            {/* page index lower-right */}
            <div className="mono" style={{
              position: "absolute", bottom: 12, right: 16,
              color: "#F2E8D0", fontSize: 10, opacity: .8,
            }}>01 / 05</div>
          </div>
        </div>

        {/* 3 category cards */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          gap: 18, padding: "22px 28px 12px", flexShrink: 0,
        }}>
          {[
            { icon: "code", title: "Engineering", sub: "Full-Stack Implementation", color: "var(--mustard)", target: "stack" },
            { icon: "compass", title: "Aesthetics", sub: "UI / UX Design Systems", color: "var(--wine)", target: "projects" },
            { icon: "book", title: "Mentorship", sub: "Team Leadership & Growth", color: "var(--c-cream)", target: "experience" },
          ].map((c, i) => (
            <button key={i} onClick={() => go(c.target)} style={{
              border: `1px solid ${palette.ink}33`, padding: "28px 16px",
              color: palette.ink, display: "flex", flexDirection: "column", alignItems: "center", gap: 14,
              background: "transparent", transition: "background .25s, transform .25s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = `${palette.ink}11`; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = "none"; }}>
              <div style={{
                width: 50, height: 50, borderRadius: 999, background: c.color,
                color: "var(--teal)", display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {c.icon === "code" && <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>}
                {c.icon === "compass" && <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>}
                {c.icon === "book" && <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>}
              </div>
              <div className="display" style={{ fontSize: 22 }}>{c.title}</div>
              <div className="italic" style={{ fontSize: 14, opacity: .82 }}>{c.sub}</div>
            </button>
          ))}
        </div>

        <PageFooter palette={palette} />
      </div>
      {/* corner ticks */}
      <CornerTicks color={palette.ink} />
    </div>
  );
}

// ===== Corner Ticks decoration (architectural marks) =====
function CornerTicks({ color = "currentColor" }) {
  const tick = (style) => (
    <div style={{
      position: "absolute", width: 24, height: 24,
      borderColor: color, borderStyle: "solid", opacity: .55,
      ...style
    }} />
  );
  return (
    <>
      {tick({ top: 10, left: 10, borderWidth: "1px 0 0 1px" })}
      {tick({ top: 10, right: 10, borderWidth: "1px 1px 0 0" })}
      {tick({ bottom: 10, left: 10, borderWidth: "0 0 1px 1px" })}
      {tick({ bottom: 10, right: 10, borderWidth: "0 1px 1px 0" })}
    </>
  );
}

// ===================================================================
// PROJECTS INDEX
// ===================================================================
const PROJECTS = [
  { no: "001", title: "The Monolith", year: "2023", stack: "React / Next.js", color: "#163A52", icon: "compass" },
  { no: "002", title: "Launch Control", year: "2022", stack: "Node / GraphQL", color: "#7D2A2A", icon: "rocket" },
  { no: "003", title: "Chroma UI", year: "2022", stack: "Design System", color: "#D9B856", icon: "palette" },
  { no: "004", title: "Terminal Velocity", year: "2023", stack: "Rust / CLI", color: "#1B3A30", icon: "terminal" },
  { no: "005", title: "The Emporium", year: "2020", stack: "Shopify Liquid", color: "#D26A55", icon: "shop" },
  { no: "006", title: "Data Weaver", year: "2019", stack: "Python / D3.js", color: "#1A1A1A", icon: "grid" },
];

function ProjectsScreen({ go }) {
  const palette = { ink: "var(--teal-deep)", accent: "var(--teal)" };
  return (
    <div className="page" style={{
      background: "var(--blush)", color: "var(--teal-deep)",
    }}>
      <div className="grain" />
      <div className="page-inner" style={{ borderColor: "var(--teal-deep)" }}>
        <TopNav go={go} current="projects" palette={{ ink: "var(--teal-deep)" }} />

        <div style={{
          flex: 1, overflow: "auto", padding: "44px 64px 48px",
        }}>
          <div style={{ textAlign: "center", marginBottom: 38 }}>
            <div className="mono" style={{ fontSize: 11, marginBottom: 12, paddingBottom: 6, borderBottom: "1px solid currentColor", display: "inline-block" }}>Volume II</div>
            <h1 className="display" style={{
              fontSize: "clamp(40px, 6vw, 88px)", margin: 0, color: "var(--teal-deep)",
            }}>CATALOGUE OF DIGITAL ARTIFACTS</h1>
            <p className="italic" style={{ fontSize: 17, marginTop: 14, opacity: .8 }}>
              Selected works &amp; curiosities from the archives.
            </p>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
            gap: "32px 36px",
          }}>
            {PROJECTS.map((p, i) => <ProjectCard key={i} p={p} onOpen={() => go("project-detail", { id: p.no })} />)}
          </div>

          <div style={{ textAlign: "center", marginTop: 36 }}>
            <button onClick={() => go("home")} style={{
              width: 44, height: 44, borderRadius: 999,
              border: "1px solid var(--teal-deep)",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              color: "var(--teal-deep)",
            }} title="Home">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12l9-9 9 9"/><path d="M5 10v10h14V10"/></svg>
            </button>
          </div>
        </div>
      </div>
      <CornerTicks color="var(--teal-deep)" />
    </div>
  );
}

function ProjectCard({ p, onOpen }) {
  return (
    <button onClick={onOpen} style={{
      display: "block", width: "100%", textAlign: "left",
      transition: "transform .25s",
    }}
    onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; }}
    onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; }}>
      {/* Poster */}
      <div style={{
        background: "#F2E8D0", padding: 12, boxShadow: "0 4px 18px rgba(0,0,0,.15)",
      }}>
        <div style={{
          background: p.color, aspectRatio: "3 / 4",
          display: "flex", alignItems: "center", justifyContent: "center",
          position: "relative", border: `2px solid ${p.color}`,
          outline: "1px solid rgba(255,255,255,.6)", outlineOffset: -8,
        }}>
          <PosterIcon kind={p.icon} />
        </div>
      </div>
      {/* Caption row */}
      <div style={{
        display: "grid", gridTemplateColumns: "auto 1fr auto",
        gap: 16, marginTop: 14, alignItems: "baseline",
      }}>
        <div className="mono" style={{ fontSize: 10, opacity: .55 }}>No. {p.no}</div>
        <div>
          <div className="display" style={{ fontSize: 22, color: "var(--teal-deep)" }}>{p.title}</div>
          <div className="mono" style={{ fontSize: 9, marginTop: 4, opacity: .65 }}>{p.stack}</div>
        </div>
        <div className="mono" style={{ fontSize: 10, opacity: .55 }}>{p.year}</div>
      </div>
    </button>
  );
}

function PosterIcon({ kind }) {
  const style = { width: "38%", height: "38%", color: "var(--c-cream)" };
  if (kind === "compass") return (
    <svg viewBox="0 0 100 100" style={style} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="34" cy="30" r="10" /><circle cx="66" cy="30" r="10" />
      <line x1="34" y1="40" x2="40" y2="84" /><line x1="66" y1="40" x2="60" y2="84" />
      <line x1="40" y1="84" x2="60" y2="84" />
      <line x1="44" y1="92" x2="56" y2="92" strokeWidth="6" />
    </svg>
  );
  if (kind === "rocket") return (
    <>
      <svg viewBox="0 0 100 100" style={{ position: "absolute", top: "12%", width: "20%", height: "20%", color: "var(--c-cream)" }} fill="none" stroke="currentColor" strokeWidth="3">
        <circle cx="50" cy="50" r="40" />
      </svg>
      <svg viewBox="0 0 100 100" style={style} fill="currentColor">
        <path d="M50 10 L66 50 L60 70 L66 80 L50 75 L34 80 L40 70 L34 50 Z" />
        <path d="M40 70 L30 88 L46 80 Z" />
        <path d="M60 70 L70 88 L54 80 Z" />
        <circle cx="50" cy="44" r="6" fill="#7D2A2A" />
      </svg>
    </>
  );
  if (kind === "palette") return (
    <svg viewBox="0 0 100 100" style={style} fill="currentColor">
      <path d="M50 10 C20 10 8 32 8 52 C8 70 22 78 36 72 C46 68 40 56 50 56 C70 56 88 48 88 32 C88 18 74 10 50 10 Z" fill="#1B4A52" />
    </svg>
  );
  if (kind === "terminal") return (
    <svg viewBox="0 0 100 100" style={style} fill="none" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round">
      <rect x="14" y="22" width="72" height="56" rx="3" />
      <polyline points="28 42 42 50 28 58" />
      <line x1="48" y1="60" x2="64" y2="60" />
    </svg>
  );
  if (kind === "shop") return (
    <svg viewBox="0 0 100 100" style={style} fill="currentColor">
      <path d="M16 38 L26 22 L74 22 L84 38 L84 78 L16 78 Z" />
      <path d="M20 22 L80 22 L84 38 L16 38 Z" fill="#a14a3b" />
      <rect x="36" y="50" width="28" height="28" fill="#D26A55" />
    </svg>
  );
  if (kind === "grid") return (
    <svg viewBox="0 0 100 100" style={style} fill="#D9B856" stroke="#D9B856" strokeWidth="3">
      <rect x="30" y="30" width="40" height="40" />
      <line x1="50" y1="30" x2="50" y2="70" stroke="#1A1A1A" />
      <line x1="30" y1="50" x2="70" y2="50" stroke="#1A1A1A" />
    </svg>
  );
  return null;
}

// ===================================================================
// PROJECT DETAIL — single case study
// ===================================================================
function ProjectDetailScreen({ go, projectId = "001" }) {
  const project = PROJECTS.find(p => p.no === projectId) || PROJECTS[0];
  const palette = { ink: "var(--teal-deep)" };
  return (
    <div className="page" style={{
      background: "var(--parchment)", color: "var(--teal-deep)",
    }}>
      <div className="grain" />
      <div className="page-inner" style={{ borderColor: "var(--teal-deep)" }}>
        <TopNav go={go} current="projects" palette={{ ink: "var(--teal-deep)" }} />

        <div style={{ flex: 1, overflow: "auto", padding: "30px 64px 36px" }}>
          {/* breadcrumb */}
          <div style={{ marginBottom: 18, display: "flex", gap: 14, alignItems: "center" }}>
            <button onClick={() => go("projects")} style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "7px 16px", border: "1px solid var(--teal-deep)",
              fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".2em",
              textTransform: "uppercase", color: "var(--teal-deep)",
              transition: "background .25s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(31,57,70,.08)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
            >← Back to Catalogue</button>
            <span className="mono" style={{ fontSize: 10, opacity: .5 }}>Case Study No. {project.no}</span>
          </div>

          {/* Title block */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "end", gap: 30, borderBottom: "1px solid currentColor", paddingBottom: 18 }}>
            <div>
              <div className="mono" style={{ fontSize: 11, marginBottom: 8 }}>Chapter {project.no} — {project.year}</div>
              <h1 className="display" style={{ fontSize: "clamp(46px, 6.4vw, 92px)", margin: 0 }}>{project.title}</h1>
            </div>
            <div className="mono" style={{ fontSize: 10, textAlign: "right", lineHeight: 1.7 }}>
              <div>Stack ......... {project.stack}</div>
              <div>Role .......... Lead Engineer</div>
              <div>Duration ...... 11 months</div>
              <div>Team .......... 4 souls</div>
            </div>
          </div>

          {/* Cover poster + summary */}
          <div style={{ display: "grid", gridTemplateColumns: "360px 1fr", gap: 38, marginTop: 28 }}>
            <div style={{ background: "#F2E8D0", padding: 12 }}>
              <div style={{ background: project.color, aspectRatio: "3/4", display: "flex", alignItems: "center", justifyContent: "center", outline: "1px solid rgba(255,255,255,.6)", outlineOffset: -8 }}>
                <PosterIcon kind={project.icon} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 10, marginTop: 12 }}>
                <div className="mono" style={{ fontSize: 9, opacity: .55 }}>No. {project.no}</div>
                <div className="display" style={{ fontSize: 15 }}>{project.title}</div>
                <div className="mono" style={{ fontSize: 9, opacity: .55 }}>{project.year}</div>
              </div>
            </div>
            <div>
              <div className="mono" style={{ fontSize: 11, marginBottom: 10, borderBottom: "1px solid currentColor", paddingBottom: 6 }}>Overview</div>
              <p style={{ fontSize: 19, lineHeight: 1.5, fontFamily: "var(--serif-body)", marginTop: 0 }}>
                A meticulous rebuild of a sprawling enterprise platform, reimagined as a single elegant monolith. Performance, taxonomy, and a sense of grandeur were each given equal measure.
              </p>
              <p style={{ fontFamily: "var(--serif-body)", fontStyle: "italic", fontSize: 17, lineHeight: 1.55, color: "var(--wine)" }}>
                "We approached the codebase as one might restore a Hapsburg ballroom — with reverence, restraint, and the occasional dramatic flourish."
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22, marginTop: 22 }}>
                <Stat label="Bundle size" value="− 62%" />
                <Stat label="Time to interactive" value="0.8s" />
                <Stat label="Lighthouse" value="100 / 100" />
              </div>
            </div>
          </div>

          {/* Sections */}
          <div style={{ marginTop: 38, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 38 }}>
            <Section title="The Challenge" body="The previous incarnation had grown — like all ambitious projects — into something that no single mortal could comprehend. Twelve frameworks, four runtimes, an inexplicable jQuery. We were asked to unify it." />
            <Section title="The Approach" body="A single Next.js application, a single design system, a single source of truth. Every component re-drawn from first principles; every interaction storyboarded before being committed to code." />
            <Section title="The Outcome" body="A 62% smaller bundle, doubled engagement, and a small standing ovation from the platform team. The client wept; politely." />
            <Section title="Reflections" body="Constraint is the great editor. We removed five frameworks and gained, in their place, a quiet confidence about the system as a whole." />
          </div>
        </div>
      </div>
      <CornerTicks color="var(--teal-deep)" />
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div style={{ borderTop: "1px solid currentColor", paddingTop: 10 }}>
      <div className="mono" style={{ fontSize: 9, opacity: .6, marginBottom: 6 }}>{label}</div>
      <div className="display" style={{ fontSize: 28 }}>{value}</div>
    </div>
  );
}
function Section({ title, body }) {
  return (
    <div>
      <div className="mono" style={{ fontSize: 11, marginBottom: 10, borderBottom: "1px solid currentColor", paddingBottom: 6 }}>{title}</div>
      <p style={{ fontSize: 17, fontFamily: "var(--serif-body)", lineHeight: 1.5, margin: 0 }}>{body}</p>
    </div>
  );
}

Object.assign(window, { TopNav, PageFooter, CornerTicks, HomeScreen, ProjectsScreen, ProjectDetailScreen, NAV, PROJECTS, PosterIcon });
