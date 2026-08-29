const DSD = window.AgentoDesignSystem_36a6ee;

function DocsPage({ page, setPage }) {
  const { SidebarNav, SearchBox, Toc, Pager, Crumbs, Note, DataTable, CodeBlock, CodeKey, CodeComment, Row, RowList } = DSD;
  const groups = [
    { label: 'Start here', items: [
      { label: 'Overview', href: '/docs/' },
      { label: 'Installation', href: '/docs/installation/' },
      { label: 'User guide', href: '/docs/user-guide/' },
    ] },
    { label: 'Reference', items: [
      { label: 'Architecture', href: '/docs/architecture/' },
      { label: 'LLM Gateway', href: '/docs/gateway/' },
      { label: 'Integrations', href: '/docs/integrations/' },
    ] },
    { label: 'Help', items: [
      { label: 'Troubleshooting', href: '/docs/troubleshooting/' },
      { label: 'Release notes', href: '/docs/releases/' },
    ] },
  ];
  return (
    <div className="shell">
      <div style={{ display: 'grid', gridTemplateColumns: '232px minmax(0,1fr) 190px', gap: 34, padding: '34px 0 60px', alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 20 }}>
          <SearchBox onClick={() => {}} />
          <SidebarNav groups={groups} current={page} />
        </div>

        <article style={{ maxWidth: 'var(--measure)' }}>
          <Crumbs items={['Docs', 'Installation']} />
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 52, lineHeight: 1.02, letterSpacing: '-0.02em', margin: '0 0 10px' }}>Installation</h1>
          <p style={{ fontSize: 18, color: 'var(--ink-soft)', margin: '0 0 26px', maxWidth: '56ch' }}>
            Agento runs on macOS, Windows and Linux. It needs the Claude Code CLI on the same machine, signed in.
          </p>

          <h2 id="requirements" className="doc-h2">Requirements</h2>
          <p className="doc-p">
            Agento spawns the Claude Code CLI and reuses its sign-in, so there is no Anthropic API key
            to enter. If this prints a version, you are ready:
          </p>
          <CodeBlock style={{ marginBottom: 18 }}><CodeKey>claude</CodeKey> --version</CodeBlock>
          <DataTable style={{ marginBottom: 20 }} head={['Requirement', 'Minimum', 'Notes']} rows={[
            [<code>claude</code>, '2.0', 'Signed in. Agento never stores the credential itself.'],
            ['macOS', '13 Ventura', 'Universal builds for arm64 and x64.'],
            ['Windows', '10 22H2', 'MSI installer, x64 only.'],
            ['Linux', 'glibc 2.31', 'AppImage, .deb and .rpm.'],
          ]} />

          <h2 id="download" className="doc-h2">Download</h2>
          <RowList style={{ marginBottom: 20 }}>
            <Row href="#" badge="dmg" mono="Agento_1.2.0_aarch64.dmg" right="arm64 · 12.4 MB" go="↓" recommended />
            <Row href="#" badge="msi" mono="Agento_1.2.0_x64_en-US.msi" right="x64 · 11.8 MB" go="↓" />
            <Row href="#" badge="appimage" mono="agento_1.2.0_amd64.AppImage" right="x64 · 96.2 MB" go="↓" />
          </RowList>

          <h2 id="data" className="doc-h2">Where your data lives</h2>
          <p className="doc-p">
            Everything Agento owns lives in <code>~/.agento</code> — one SQLite file, plus the logs.
            Your Claude Code transcripts in <code>~/.claude</code> are read but never modified.
          </p>
          <Note label="Privacy">
            There is no account, no telemetry and no analytics. Deleting <code>~/.agento</code> resets
            the app completely.
          </Note>
          <Note kind="warn">
            Integration credentials are stored in plain text in the local database. Their protection is
            your user account and your disk permissions, so treat <code>~/.agento</code> as sensitive.
          </Note>

          <h2 id="quarantine" className="doc-h2">If macOS refuses to open it</h2>
          <p className="doc-p">These builds are signed with our own key rather than an EV certificate. Clear the quarantine flag:</p>
          <CodeBlock style={{ marginBottom: 18 }}>
            xattr -dr com.apple.quarantine /Applications/Agento.app
            {'\n'}<CodeComment># then open it from Applications as usual</CodeComment>
          </CodeBlock>

          <Pager prev={{ label: 'Overview', href: '/docs/' }} next={{ label: 'User guide', href: '/docs/user-guide/' }} />
        </article>

        <div style={{ position: 'sticky', top: 20 }}>
          <Toc current="#requirements" items={[
            { label: 'Requirements', href: '#requirements' },
            { label: 'Download', href: '#download' },
            { label: 'Where your data lives', href: '#data' },
            { label: 'If macOS refuses', href: '#quarantine' },
          ]} />
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { DocsPage });
