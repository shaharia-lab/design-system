const DS3 = window.AgentoDesignSystem_36a6ee;

/* The static-page shell: a single prose column with no sidebar and no TOC —
   Security, Privacy, Licence, About. Built on the same measure and heading
   rules as the docs article, without the docs grid around it. The source site
   has no page of this kind yet; the shell follows `.article` in site.css. */
function StaticPage({ title, lede, children }) {
  const { Crumbs, Note } = DS3;
  return (
    <div className="shell">
      <article style={{ maxWidth: 'var(--measure)', padding: '46px 0 70px' }}>
        <Crumbs items={['Agento', title]} />
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 52, lineHeight: 1.02, letterSpacing: '-0.02em', margin: '0 0 10px' }}>{title}</h1>
        <p style={{ fontSize: 18, color: 'var(--ink-soft)', margin: '0 0 26px', maxWidth: '56ch' }}>{lede}</p>
        {children}
      </article>
    </div>
  );
}

function SecurityPage() {
  const { Note, DataTable } = DS3;
  return (
    <StaticPage title="Security" lede="How to report something, what we will do about it, and what the app does with your credentials.">
      <h2 className="doc-h2">Reporting a vulnerability</h2>
      <p className="doc-p">
        Open a private security advisory on the repository rather than a public issue. We reply within
        three working days, and we will tell you when a fix ships even if the answer is that we are
        not going to fix it.
      </p>
      <h2 className="doc-h2">What is stored, and where</h2>
      <DataTable style={{ marginBottom: 20 }} head={['Data', 'Location', 'At rest']} rows={[
        ['Sessions and analytics', <code>~/.agento</code>, 'One SQLite file, unencrypted'],
        ['Claude Code transcripts', <code>~/.claude</code>, 'Read only, never modified'],
        ['Integration credentials', <code>~/.agento</code>, 'Plain text'],
      ]} />
      <Note kind="warn">
        Integration credentials are stored in plain text in the local database. Their protection is
        your user account and your disk permissions, so treat <code>~/.agento</code> as sensitive.
      </Note>
      <Note label="Scope">
        There is no server, no account and no telemetry, so there is no hosted surface to report
        against — only the desktop app and this site.
      </Note>
    </StaticPage>
  );
}

Object.assign(window, { StaticPage, SecurityPage });
