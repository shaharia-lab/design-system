const DS = window.AgentoDesignSystem_36a6ee;
const REPO = 'https://github.com/shaharia-lab/agento';
const VERSION = '1.2.0';

function Landing({ go }) {
  const { Pill, Button, StatGrid, Shot, SectionHead, Panel, Disclosure, StarBand, Closer, Eyebrow, CodeBlock, CodeKey, Row, RowList, Sheet } = DS;
  return (
    <div className="shell">
      <section style={{ padding: '64px 0 40px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 22 }}>
          <Pill>v{VERSION}</Pill>
          <Pill plain>macOS · Windows · Linux</Pill>
          <Pill plain>MIT licensed</Pill>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(44px, 8vw, 92px)', lineHeight: 0.97, letterSpacing: '-0.02em', margin: '0 0 20px', textWrap: 'balance', maxWidth: '19ch', fontWeight: 400 }}>
          See what Claude Code <em style={{ fontStyle: 'italic', color: 'var(--accent-deep)' }}>really</em> costs you.
        </h1>
        <p style={{ fontSize: 19, lineHeight: 1.55, maxWidth: '54ch', color: 'var(--ink-soft)', margin: '0 0 30px' }}>
          Agento reads the session files Claude Code already writes to your disk and turns them into
          cost analytics, productivity insights and a searchable, replayable history of every run.
          Then it lets you build agents, schedule them, and connect them to your tools.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
          <Button variant="primary" href="#install">Download {VERSION} →</Button>
          <Button variant="ink" onClick={() => go('Docs')}>Read the docs</Button>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '0.04em' }}>No API key. No account. No telemetry.</span>
        </div>
        <div style={{ marginTop: 44 }}>
          <StatGrid items={[
            { n: '0', k: 'Bytes sent anywhere' },
            { n: '1', k: 'SQLite file, on your disk' },
            { n: '6', k: 'Integrations built in' },
            { n: '~60s', k: 'Install to first session' },
          ]} />
        </div>
        <div style={{ marginTop: 40 }}>
          <Shot name="Agento — Insights" alt="Insights: cost, autonomy, cache-hit and tool-error cards"
            caption="Every tool call attributed to a skill, MCP server or sub-agent." />
        </div>
      </section>

      <section className="section">
        <SectionHead title="Two halves, one window." label="What you get" />
        <div className="split">
          <Panel eyebrow="Looks backward" title="Your history, made legible">
            <p style={{ margin: '0 0 14px' }}>Agento never asks you to change how you work. It reads what Claude Code already wrote.</p>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              <li style={{ marginBottom: 6 }}><b style={{ color: 'var(--ink)' }}>Cost per session</b>, priced at the rate in effect when each message ran.</li>
              <li style={{ marginBottom: 6 }}><b style={{ color: 'var(--ink)' }}>Full-text search</b> across every transcript, ranked, with snippets.</li>
              <li><b style={{ color: 'var(--ink)' }}>Session journey</b> — turn by turn, sub-agents nested under the task that spawned them.</li>
            </ul>
          </Panel>
          <Panel variant="dashed" eyebrow="Looks forward" title="Agents that do the work">
            <p style={{ margin: '0 0 14px' }}>Build one, give it tools, hand it a schedule, and read the job history in the morning.</p>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              <li style={{ marginBottom: 6 }}><b style={{ color: 'var(--ink)' }}>Agent builder</b> with system prompts, tool allowlists and permission modes.</li>
              <li style={{ marginBottom: 6 }}><b style={{ color: 'var(--ink)' }}>Scheduled tasks</b> — cron, intervals, or a one-off at a fixed instant.</li>
              <li><b style={{ color: 'var(--ink)' }}>GitHub, Slack, Jira, Confluence, Telegram, Google</b> as in-process MCP servers.</li>
            </ul>
          </Panel>
        </div>
      </section>

      <section className="section">
        <SectionHead title="Every section, one keystroke away." label="⌘K" />
        <div className="grid3">
          {[
            ['01 · Chats', 'Talk to your agents', 'Streaming turns, tool calls rendered inline, and a permission prompt you can actually answer.'],
            ['02 · Agents', 'Build and version them', 'Prompt templates with variables, tool allowlists, and a Claude settings profile per agent.'],
            ['03 · Tasks', 'Put them on a clock', 'Cron expressions validated at save time, so a schedule that can never fire is refused.'],
            ['04 · Sessions', 'Replay any run', 'Ranked search over 1,000+ transcripts, then continue any one of them as a live chat.'],
            ['05 · Analytics', 'Where the money went', 'Cost by model and project, cache-hit rate, and an activity heatmap in your own timezone.'],
            ['06 · Gateway', 'Route your other tools', 'One OpenAI- and Anthropic-compatible endpoint on loopback, with usage and cost per request.'],
          ].map(([k, t, b]) => (
            <Panel key={k} size="card" eyebrow={k} title={t}><p style={{ margin: 0, lineHeight: 1.55 }}>{b}</p></Panel>
          ))}
        </div>
      </section>

      <Install />

      <section className="section">
        <SectionHead title="Built for the desk, not the tab." label="Design" />
        <div className="split split--media">
          <Shot name="Agento — Agent builder" alt="Agent builder: prompt, model, tools, permission mode" />
          <Panel eyebrow="Design" eyebrowEnd={<a href="#" style={{ borderBottom: '1.5px solid var(--accent)' }}>Architecture ↗</a>} title="A native app that behaves like one">
            <p style={{ margin: '0 0 14px' }}>Three resizable panes per section, hairline borders, focus-aware selection, a status bar, and a command palette. No browser affordances, because it is not a browser.</p>
            <p style={{ margin: '0 0 14px' }}>One process, one SQLite file, and the Claude Code CLI spawned per run. The whole backend is Rust; the window is Tauri.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
              {['Tauri 2', 'Rust', 'React', 'SQLite'].map((t) => <Pill key={t} plain>{t}</Pill>)}
            </div>
          </Panel>
        </div>
      </section>

      <Faq />

      <StarBand action={<Button variant="primary" href={REPO}><span aria-hidden="true">★</span> Star on GitHub</Button>}>
        Stars are how the next Claude Code user finds Agento. It is the whole of our distribution —
        there is no ad budget and nothing tracks you here.
      </StarBand>

      <Closer title="Your sessions are already on disk."
        actions={<>
          <Button variant="primary" onInvert href={REPO + '/releases'}>Download {VERSION} →</Button>
          <Button variant="ghost" onInvert href={REPO}>Star on GitHub</Button>
        </>}>
        Agento just reads them. Install it, and the last six months of your Claude Code usage become a dashboard you can search.
      </Closer>
    </div>
  );
}

function Install() {
  const { SectionHead, Panel, Disclosure, Row, RowList, CodeBlock, CodeKey } = DS;
  const [open, setOpen] = React.useState('macos');
  const OSES = [
    { id: 'macos', label: 'macOS', files: [
        { badge: 'dmg', file: 'Agento_' + VERSION + '_aarch64.dmg', right: 'arm64 · 12.4 MB', rec: true },
        { badge: 'dmg', file: 'Agento_' + VERSION + '_x64.dmg', right: 'x64 · 13.1 MB' },
      ], steps: ['Open the .dmg and drag Agento to Applications.', 'If macOS says the app cannot be verified, right-click it and choose Open.'],
      code: 'xattr -dr com.apple.quarantine /Applications/Agento.app',
      hint: 'Apple menu → About This Mac tells you which chip you have.' },
    { id: 'windows', label: 'Windows', files: [
        { badge: 'msi', file: 'Agento_' + VERSION + '_x64_en-US.msi', right: 'x64 · 11.8 MB' },
      ], steps: ['Run the installer.', 'SmartScreen may warn that the publisher is unknown — choose More info, then Run anyway.'],
      hint: 'Updates arrive in the app after the first install.' },
    { id: 'linux', label: 'Linux', files: [
        { badge: 'appimage', file: 'agento_' + VERSION + '_amd64.AppImage', right: 'x64 · 96.2 MB' },
        { badge: 'deb', file: 'agento_' + VERSION + '_amd64.deb', right: 'x64 · 10.4 MB' },
        { badge: 'rpm', file: 'agento-' + VERSION + '-1.x86_64.rpm', right: 'x64 · 10.6 MB' },
      ], steps: ['AppImage — works on any distribution, and updates in-app:'],
      code: 'chmod +x agento_' + VERSION + '_amd64.AppImage\n./agento_' + VERSION + '_amd64.AppImage',
      hint: 'The AppImage updates itself; .deb and .rpm are notify-only, because dpkg and rpm own their files.' },
  ];
  return (
    <section className="section" id="install">
      <SectionHead title="Installed in about a minute." label="Install" />
      <Panel eyebrow="Before anything" eyebrowEnd={<a href="#" style={{ borderBottom: '1.5px solid var(--accent)' }}>Requirements ↗</a>} title="Have the Claude Code CLI, signed in" style={{ marginBottom: 22 }}>
        <p style={{ margin: '0 0 14px' }}>Agento runs every agent through the CLI you already have and reuses its sign-in. There is no Anthropic API key to enter. If this prints a version, you are ready:</p>
        <CodeBlock><CodeKey>claude</CodeKey> --version</CodeBlock>
      </Panel>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {OSES.map((os) => (
          <Disclosure key={os.id} variant="panel" summary={os.label}
            meta={os.files.length + (os.files.length === 1 ? ' file' : ' files')}
            recommended={os.id === 'macos'}
            open={open === os.id} onToggle={(o) => setOpen(o ? os.id : null)}>
            <RowList style={{ marginBottom: 16 }}>
              {os.files.map((f) => <Row key={f.file} href="#" badge={f.badge} mono={f.file} right={f.right} go="↓" recommended={f.rec} />)}
            </RowList>
            <ol style={{ margin: '0 0 14px', paddingLeft: 18, fontSize: 14.5, color: 'var(--ink-soft)' }}>
              {os.steps.map((s) => <li key={s} style={{ marginBottom: 12 }}>{s}</li>)}
            </ol>
            {os.code ? <CodeBlock code={os.code} style={{ fontSize: 11.5, marginBottom: 16 }} /> : null}
            <p className="label" style={{ textTransform: 'none', letterSpacing: '0.01em', lineHeight: 1.5, margin: 0 }}>{os.hint}</p>
          </Disclosure>
        ))}
      </div>
      <p style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center', margin: '22px 0 0' }}>
        <span className="label">Not your platform?</span>
        <a href={REPO + '/releases'} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', borderBottom: '1.5px solid var(--accent)' }}>Every file in v{VERSION} ↗</a>
      </p>
    </section>
  );
}

function Faq() {
  const { Panel, Disclosure } = DS;
  const [open, setOpen] = React.useState(0);
  const FAQ = [
    ['Does Agento send my transcripts anywhere?', 'No. Everything is stored locally in ~/.agento, and your Claude Code transcripts in ~/.claude are read but never modified. There is no account, no telemetry and no analytics. The only outbound calls are the ones you asked for: agent runs, the integrations you connected, the update check — which you can switch off — and, if you turn it on, the providers the LLM Gateway forwards to.', 'Privacy'],
    ['Do I need an Anthropic API key?', 'No. Agento runs every agent by launching the Claude Code CLI on your machine and reuses its sign-in. If claude works in your terminal, Agento works. The app tells you on launch if it cannot find the CLI, and where it looked.', 'Requirements'],
    ['Will it change anything in ~/.claude?', 'Your session transcripts are read only. Agento does write Claude Code\u2019s own settings.json and the settings profiles beside it — but only when you edit them from the Settings section yourself. Everything Agento owns lives in ~/.agento, and deleting that directory resets it completely.', 'Where your data lives'],
    ['Can I point my other tools at it?', 'Yes. The LLM Gateway is an OpenAI- and Anthropic-compatible endpoint on loopback that routes to whichever providers you configure, and records usage and cost per request. It is off by default and costs one database read at startup when it is.', 'LLM Gateway'],
    ['How are my integration credentials stored?', 'In plain text, in the local database. Their protection is your user account and your disk permissions, so treat ~/.agento as sensitive. The API scrubs secrets from every response and the app never displays one back to you, but the bytes at rest are not encrypted.', 'Privacy'],
  ];
  return (
    <section className="section">
      <Panel eyebrow="Frequently asked" eyebrowEnd={<a href="#" style={{ borderBottom: '1.5px solid var(--accent)' }}>All documentation ↗</a>}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {FAQ.map(([q, a, more], i) => (
            <Disclosure key={q} summary={q} open={open === i} onToggle={(o) => setOpen(o ? i : null)}>
              <p style={{ margin: '0 0 10px', fontSize: 15, color: 'var(--ink-soft)', maxWidth: '72ch' }}>{a}</p>
              <a href="#" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', borderBottom: '1.5px solid var(--accent)', color: 'var(--accent-deep)' }}>{more} ↗</a>
            </Disclosure>
          ))}
        </div>
      </Panel>
    </section>
  );
}

Object.assign(window, { Landing });
