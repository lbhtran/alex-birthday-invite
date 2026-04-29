import Effects from "./components/Effects";

// Replace this with your Google Form URL when ready.
// If set to "#", the button will stay on the same page (no new tab).
const RSVP_URL = "#";

export default function Home() {
  const isRealUrl = RSVP_URL !== "#";

  return (
    <>
      {/* ── Sticky navigation ── */}
      <nav className="nav">
        <a href="#top">Home</a>
        <a href="#cake">Cake</a>
        <a href="#bbq">BBQ</a>
        <a href="#music">Music</a>
        <a href="#games">Games</a>
        <a href="#rsvp">RSVP</a>
      </nav>

      {/* ── Hero ── */}
      <section id="top" className="hero">
        <span className="hero-emoji">🎉</span>
        <h1>Alex&apos;s Birthday Bash!</h1>
        <p className="hero-subtitle">You&apos;re invited to a Jungle Party 🌿</p>

        <div className="hero-details">
          <div className="hero-detail">
            <span className="icon">📅</span>
            <span>Saturday 23rd May 2026</span>
          </div>
          <div className="hero-detail">
            <span className="icon">⏰</span>
            <span>5pm onwards</span>
          </div>
          <div className="hero-detail">
            <span className="icon">📍</span>
            <span>156 Eredine Crescent, Milton Keynes, MK5 6GZ</span>
          </div>
        </div>

        <a href="#cake" className="scroll-hint">
          Scroll down to explore ↓
        </a>

        <span className="leaf-left" aria-hidden="true">🌿</span>
        <span className="leaf-right" aria-hidden="true">🌿</span>
      </section>

      {/* ── Cake ── */}
      <section id="cake" className="cake-section">
        <div className="section-card">
          <span className="section-icon">🎂</span>
          <h2>Birthday Cake</h2>
          <p>What&apos;s a birthday without cake? There will be a delicious cake to celebrate!</p>
          <p>Join us for the big cake cutting at sunset 🌅</p>
        </div>
        <span className="leaf-left" aria-hidden="true">🌿</span>
        <span className="leaf-right" aria-hidden="true">🌿</span>
      </section>

      {/* ── BBQ ── */}
      <section id="bbq" className="bbq-section">
        <div className="section-card">
          <span className="section-icon">🔥</span>
          <h2>BBQ Feast</h2>
          <p>Fire up the grill! We&apos;ll have an amazing BBQ spread with all the good stuff.</p>
          <p>Food served from 5pm onwards 🍖 🌽 🥗</p>
        </div>
        <span className="leaf-left" aria-hidden="true">🌿</span>
        <span className="leaf-right" aria-hidden="true">🌿</span>
      </section>

      {/* ── Music ── */}
      <section id="music" className="music-section">
        <div className="section-card">
          <span className="section-icon">🎵</span>
          <h2>Music &amp; Dancing</h2>
          <p>Get ready to dance! We&apos;ll have great music all night long.</p>
          <p>From chill jungle vibes to party anthems 🎶 ✨</p>
        </div>
        <span className="leaf-left" aria-hidden="true">🌿</span>
        <span className="leaf-right" aria-hidden="true">🌿</span>
      </section>

      {/* ── Games ── */}
      <section id="games" className="games-section">
        <div className="section-card">
          <span className="section-icon">🎮</span>
          <h2>Games &amp; Fun</h2>
          <p>Loads of garden games and activities for everyone!</p>
          <p>Bring your A-game and get ready for some friendly competition 🏆</p>
        </div>
        <span className="leaf-left" aria-hidden="true">🌿</span>
        <span className="leaf-right" aria-hidden="true">🌿</span>
      </section>

      {/* ── RSVP ── */}
      <section id="rsvp" className="rsvp-section">
        <div className="section-card">
          <span className="section-icon">✉️</span>
          <h2>RSVP</h2>
          <p>Please let us know if you can make it!</p>
          <p>Saturday 23rd May 2026, 5pm onwards</p>
          <p>156 Eredine Crescent, Milton Keynes, MK5 6GZ</p>
          <a
            href={RSVP_URL}
            className="rsvp-btn"
            {...(isRealUrl
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            RSVP Now 🎉
          </a>
        </div>
        <span className="leaf-left" aria-hidden="true">🌿</span>
        <span className="leaf-right" aria-hidden="true">🌿</span>
      </section>

      {/* ── Ambient effects (client-side) ── */}
      <Effects />
    </>
  );
}
