/* global React, useState, useEffect, useRef, Icon, Btn, Badge,
   ColorsSection, TypographySection, SpacingSection, ComponentsSection,
   PatternsSection, GuidelinesSection */
const { createRoot } = ReactDOM;

const NAV = [
  { group: "Get started", items: [{ id: "overview", label: "Overview", icon: "box" }] },
  {
    group: "Foundations",
    items: [
      { id: "colors", label: "Color", icon: "palette" },
      { id: "typography", label: "Typography", icon: "type" },
      { id: "spacing", label: "Spacing & radius", icon: "ruler" },
    ],
  },
  {
    group: "Library",
    items: [
      { id: "components", label: "Components", icon: "layout" },
      { id: "patterns", label: "Patterns", icon: "box" },
      { id: "guidelines", label: "Guidelines", icon: "shield" },
    ],
  },
];

const CRUMBS = {
  overview: "Overview", colors: "Color", typography: "Typography", spacing: "Spacing & radius",
  components: "Components", patterns: "Patterns", guidelines: "Guidelines",
};

function useTheme() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("vibexp-ds-theme");
    if (saved) return saved === "dark";
    return false;
  });
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("vibexp-ds-theme", dark ? "dark" : "light");
  }, [dark]);
  return [dark, setDark];
}

function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -65% 0px", threshold: 0 }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [ids.join(",")]);
  return active;
}

function Overview() {
  const stats = [
    ["18", "UI primitives"],
    ["38", "semantic tokens"],
    ["1", "radius seed → 4 steps"],
    ["2", "themes, value-flipped"],
  ];
  return (
    <section className="section" id="overview" data-screen-label="Overview" style={{ paddingTop: 6 }}>
      <div className="row" style={{ gap: 10, marginBottom: 18 }}>
        <Badge variant="brand">v1.0</Badge>
        <Badge variant="outline">shadcn/ui · default</Badge>
        <Badge variant="outline">neutral base</Badge>
        <Badge variant="outline">black brand</Badge>
        <Badge variant="outline">Tailwind v4</Badge>
      </div>
      <h1 style={{ fontSize: 46, fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.04, margin: 0, maxWidth: "16ch" }}>
        The VibeXP Design System
      </h1>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--muted-foreground)", maxWidth: "62ch", marginTop: 18 }}>
        A living reference for the product, website, blog and docs — codified straight from the
        shadcn/ui foundation already in the codebase. Pure-neutral OKLCH tokens, a single radius seed,
        full light/dark parity, and a deliberately <strong>neutral black brand</strong> — no accent
        hues, no gradients. Everything below is the
        real thing, with the authentic class names to copy.
      </p>
      <div className="row" style={{ gap: 10, marginTop: 26 }}>
        <Btn variant="brand" onClick={() => document.getElementById("colors").scrollIntoView({ behavior: "smooth", block: "start" })}>
          <Icon name="palette" size={16} /> Explore tokens
        </Btn>
        <Btn variant="outline" onClick={() => document.getElementById("components").scrollIntoView({ behavior: "smooth", block: "start" })}>
          <Icon name="layout" size={16} /> Component library
        </Btn>
      </div>

      <div className="swatch-grid" style={{ marginTop: 40, gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))" }}>
        {stats.map((s) => (
          <div className="spec-card" key={s[1]} style={{ textAlign: "left" }}>
            <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1 }}>{s[0]}</div>
            <div style={{ fontSize: 13, color: "var(--muted-foreground)", marginTop: 6 }}>{s[1]}</div>
          </div>
        ))}
      </div>

      <div className="callout" style={{ marginTop: 30 }}>
        <Icon name="info" size={16} />
        <div>
          <b>How it's wired.</b> Tokens live in <code>src/styles/index.css</code> (<code>:root</code> +{" "}
          <code>.dark</code>), surfaced to Tailwind through <code>@theme inline</code>. Components are{" "}
          <code>@/components/ui/*</code>; composed helpers are <code>@/components/*</code>. Icons are
          Lucide. This doc mirrors all of it — toggle the theme top-right to verify both modes.
        </div>
      </div>
    </section>
  );
}

function App() {
  const [dark, setDark] = useTheme();
  const allIds = NAV.flatMap((g) => g.items.map((i) => i.id));
  const active = useScrollSpy(allIds);
  const go = (id) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); };

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="sidebar__brand">
          <img className="brandmark" src="ds/logo.svg" alt="VibeXP" width="34" height="34" />
          <div>
            <div className="sidebar__title">VibeXP</div>
            <div className="sidebar__sub">Design System</div>
          </div>
        </div>
        {NAV.map((g) => (
          <div className="nav-group" key={g.group}>
            <div className="nav-group__label">{g.group}</div>
            {g.items.map((it) => (
              <a key={it.id} className={"nav-link" + (active === it.id ? " is-active" : "")}
                onClick={(e) => { e.preventDefault(); go(it.id); }} href={"#" + it.id}>
                <Icon name={it.icon} size={15} />
                {it.label}
              </a>
            ))}
          </div>
        ))}
      </aside>

      <div className="main">
        <div className="topbar">
          <div className="topbar__crumb">VibeXP DS&nbsp;&nbsp;/&nbsp;&nbsp;<b>{CRUMBS[active] || "Overview"}</b></div>
          <div className="topbar__right">
            <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle theme">
              <Icon name={dark ? "sun" : "moon"} size={15} />
              {dark ? "Light" : "Dark"}
            </button>
          </div>
        </div>
        <div className="content">
          <Overview />
          <ColorsSection />
          <TypographySection />
          <SpacingSection />
          <ComponentsSection />
          <PatternsSection />
          <GuidelinesSection />
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
