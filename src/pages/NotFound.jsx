function NotFound() {
  return (
    <section style={{ padding: '2rem 1.5rem', textAlign: 'center' }}>
      <h1 style={{ color: 'var(--accent, #da26da)' }}>404</h1>
      <p>That page doesn’t exist (or was moved).</p>
      <a
        href="/"
        style={{
          textDecoration: 'none',
          border: '1px solid #444',
          padding: '0.5rem 0.8rem',
          borderRadius: '8px',
          display: 'inline-block',
          marginTop: '1rem',
        }}
      >
        ← Go Home
      </a>
    </section>
  );
}

export default NotFound;
