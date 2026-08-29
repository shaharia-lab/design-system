const DS2 = window.AgentoDesignSystem_36a6ee;

function BlogIndex({ go }) {
  const { PostRow } = DS2;
  return (
    <div className="shell" style={{ padding: '46px 0 60px' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 62, lineHeight: 1, margin: '0 0 10px', letterSpacing: '-0.02em' }}>Notes from the build.</h1>
      <p style={{ fontSize: 18, color: 'var(--ink-soft)', margin: '0 0 38px', maxWidth: '50ch' }}>
        Release notes, ported subsystems, and the decisions that were harder than they looked.
      </p>
      <PostRow feature date="25 August 2026"
        title="Finding the Claude CLI where it actually is"
        description="A user ran claude --version, got 2.1.231, and Agento told them Claude Code was not installed. They were both right."
        tags={['Engineering', 'Release 1.2.0']}
        onClick={(e) => { e.preventDefault(); go('Post'); }} href="#" />
      <div style={{ display: 'flex', flexDirection: 'column', borderTop: 'var(--bw-strong) solid var(--ink)' }}>
        <PostRow href="#" date="12 Aug 2026" title="Pricing a message at the rate in effect"
          description="Session cost is computed per message, at the rate that applied the moment it ran — not at today's price list."
          tags={['Engineering']} />
        <PostRow href="#" date="29 Jul 2026" title="One SQLite file, and what it costs to keep it honest"
          description="Migrations, WAL mode, and why the whole database is a single file you can delete."
          tags={['Architecture', 'Release 1.1.0']} />
        <PostRow href="#" date="04 Jul 2026" title="Six integrations, in-process"
          description="GitHub, Slack, Jira, Confluence, Telegram and Google run as MCP servers inside the app rather than as subprocesses."
          tags={['Release 1.1.0']} />
      </div>
    </div>
  );
}

function BlogPost() {
  const { Pill, PullQuote, Byline, CodeBlock } = DS2;
  return (
    <div className="shell">
      <article style={{ maxWidth: 'var(--measure)', margin: '0 auto', padding: '46px 0 70px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center', marginBottom: 20 }}>
          <Pill plain>Engineering</Pill><Pill plain>Release 1.2.0</Pill>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>25 Aug 2026</span>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 58, lineHeight: 1, letterSpacing: '-0.025em', margin: '0 0 16px', textWrap: 'balance' }}>
          Finding the Claude CLI where it actually is
        </h1>
        <p style={{ fontSize: 20, lineHeight: 1.5, color: 'var(--ink-soft)', margin: '0 0 30px', paddingBottom: 26, borderBottom: 'var(--bw-strong) solid var(--ink)' }}>
          A user ran <code>claude --version</code>, got 2.1.231, and Agento told them Claude Code was not installed. They were both right.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.68, margin: '0 0 17px' }}>
          Agento does not ship the Claude Code CLI. It spawns it — every agent run is a subprocess,
          and the CLI's own sign-in is the credential. So the first thing the app does on launch is
          work out where <code>claude</code> lives, and the first thing it did wrong was assume the
          answer was on <code>PATH</code>.
        </p>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 32, margin: '38px 0 12px', lineHeight: 1.12 }}>
          A GUI app has a different PATH than your terminal
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.68, margin: '0 0 17px' }}>
          When you launch an application from Finder, the Dock or Spotlight, it inherits launchd's
          environment rather than your shell's. That is <code>/usr/bin:/bin:/usr/sbin:/sbin</code> and
          nothing else. Every line your <code>.zshrc</code> exported is invisible.
        </p>
        <PullQuote>
          The launch that matters — from the Dock, by someone who has not opened a terminal that day
          — is exactly the launch where scanning PATH finds nothing.
        </PullQuote>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 32, margin: '38px 0 12px', lineHeight: 1.12 }}>Five rules, in order</h2>
        <CodeBlock style={{ marginBottom: 20 }} code={'1. AGENTO_CLAUDE_EXECUTABLE        explicit override, trusted\n2. claude_executable_path setting  stored, trusted\n3. $SHELL -lic \'command -v claude\' login shell — finds aliases\n4. the process PATH                works when launched from a terminal\n5. known install locations         last resort, verified'} />
        <p style={{ fontSize: 17, lineHeight: 1.68, margin: '0 0 17px' }}>
          Rules three through five verify what they find: the path must be an executable file
          <b> and</b> answer <code>--version</code> with Claude Code's banner, so an unrelated
          <code> claude</code> on the <code>PATH</code> is skipped rather than spawned on every turn.
        </p>
        <Byline initials="SA" name="Shaharia Azam" role="Shaharia Lab" />
      </article>
    </div>
  );
}

function NotFound({ go }) {
  const { Row, RowList } = DS2;
  return (
    <div className="shell" style={{ padding: '80px 24px 90px', maxWidth: 720 }}>
      <span className="label">Error 404</span>
      <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(40px, 6vw, 62px)', lineHeight: 1.02, letterSpacing: '-0.02em', margin: '14px 0 12px' }}>That page is not here.</h1>
      <p style={{ color: 'var(--ink-soft)', fontSize: 18, margin: '0 0 28px' }}>The address you followed does not match anything on this site.</p>
      <RowList>
        <Row href="#" badge="docs" title="Documentation" right="Installation, the user guide, troubleshooting" onClick={(e) => { e.preventDefault(); go('Docs'); }} />
        <Row href="#" badge="blog" title="Notes from the build" right="Release notes and engineering write-ups" onClick={(e) => { e.preventDefault(); go('Blog'); }} />
        <Row href="#" badge="dl" title="Releases" right="Every build, for every platform" go="↗" />
      </RowList>
      <p style={{ marginTop: 26, fontSize: 14.5, color: 'var(--ink-soft)' }}>
        If a link on this site sent you here, that is a bug — <a href="#" style={{ color: 'var(--accent-deep)', borderBottom: '1.5px solid var(--accent)' }}>tell us</a>.
      </p>
    </div>
  );
}

Object.assign(window, { BlogIndex, BlogPost, NotFound });
