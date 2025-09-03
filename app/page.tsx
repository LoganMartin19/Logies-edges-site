import Image from "next/image";

export default function Page() {
  return (
    <main className="container">
      {/* Header with logo */}
      <header className="header" style={{justifyContent:"center"}}>
  <Image
    src="/logo.png"
    alt="Logie’s Edges"
    width={60}
    height={60}
    priority
  />
</header>

      <div className="hero">
        <span className="badge">🎯 Early access • Football + American Football</span>
        <h1>Value betting alerts that actually help you win</h1>
        <p className="lede">
          We scan bookmaker prices, build a consensus model, and ping you on Telegram when there’s real expected value.
          <br /><br />
          Today: Soccer (W/D/L, BTTS, O/U 1.5 & 2.5) and Gridiron (NFL/CFB ML, spread, totals).
          <br />
          Tomorrow: more sports, player props, and full bet tracking.
        </p>
        <div className="cta">
          <a className="button" href="https://t.me/logiesedges" target="_blank" rel="noreferrer">
            Join Telegram Alerts
          </a>
          <a className="button secondary" href="https://forms.gle/yourWaitlist" target="_blank" rel="noreferrer">
            Join the waitlist
          </a>
        </div>
      </div>

      <section className="grid">
        <div className="card">
          <h3>📡 Live scanning</h3>
          <p>Ingest fixtures & odds, recompute edges, and surface only what matters.</p>
        </div>
        <div className="card">
          <h3>🤖 Model-first</h3>
          <p>Consensus probabilities now; learning from outcomes next. No hype, just math.</p>
        </div>
        <div className="card">
          <h3>📲 Telegram-first UX</h3>
          <p>Clean, deduped alerts with prices, markets, and kickoff times.</p>
        </div>
        <div className="card">
          <h3>🧱 Roadmap-ready</h3>
          <p>Skeleton code in place for more sports, props, and full bet tracking.</p>
        </div>
      </section>

      <p className="footer">
        © {new Date().getFullYear()} Logie’s Edges. Not financial advice. Be responsible.
      </p>
    </main>
  );
}