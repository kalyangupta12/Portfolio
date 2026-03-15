import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/resume')({
  component: ResumePage,
})

function ResumePage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0D0C0B',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        fontFamily: "'IBM Plex Mono', monospace",
      }}
    >
      <span
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '48px',
          color: '#8C6A42',
          lineHeight: 1,
        }}
      >
        K
      </span>
      <p
        style={{
          fontSize: '11px',
          color: 'rgba(246,243,238,0.35)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          margin: 0,
        }}
      >
        Resume — Uploading soon
      </p>
      <a
        href="/"
        style={{
          marginTop: '24px',
          fontSize: '10px',
          color: 'rgba(246,243,238,0.2)',
          letterSpacing: '0.08em',
          textDecoration: 'none',
        }}
      >
        ← back
      </a>
    </div>
  )
}
