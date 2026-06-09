interface Props {
  ink?: string
}

export function PageFooter({ ink = 'var(--c-cream)' }: Props) {
  return (
    <footer
      className="pagefooter"
      style={{
        borderTop: `1px solid ${ink}33`,
        color: ink,
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        letterSpacing: '.18em',
        textTransform: 'uppercase',
      }}
    >
      <div>© MMXIV — MMXXVI</div>
      <div style={{ display: 'flex', gap: 28 }}>
        <a href="https://github.com/VictorJThomas" target="_blank" rel="noreferrer" style={{ color: ink }}>
          GitHub
        </a>
        <a href="https://linkedin.com/in/victor-j-thomas/?locale=es" target="_blank" rel="noreferrer" style={{ color: ink }}>
          LinkedIn
        </a>
        {/* TODO: Add Twitter link */}
        {/* <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ color: ink }}>
          Twitter
        </a> */}
      </div>
      <div style={{ textAlign: 'right', lineHeight: 1.5 }}>
        <div>Location: Remote</div>
        <div>Status: Available</div>
      </div>
    </footer>
  )
}
