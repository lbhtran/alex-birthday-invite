import Effects from "./components/Effects";

// Replace this with your Google Form URL when ready.
// If set to "#", the button will stay on the same page (no new tab).
const RSVP_URL = "#";

function LeafSVG({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 260"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M50 0 C 80 22 100 95 84 192 Q 68 248 50 262 Q 32 248 16 192 C 0 95 20 22 50 0 Z"
        fill="currentColor"
      />
      <path
        d="M50 0 L50 262"
        stroke="rgba(0,40,0,0.45)"
        strokeWidth="1.5"
        fill="none"
      />
      <path d="M50 55 Q32 70 24 92"  stroke="rgba(0,40,0,0.28)" strokeWidth="1" fill="none" />
      <path d="M50 100 Q68 115 76 138" stroke="rgba(0,40,0,0.28)" strokeWidth="1" fill="none" />
      <path d="M50 145 Q30 160 22 185" stroke="rgba(0,40,0,0.28)" strokeWidth="1" fill="none" />
      <path d="M50 185 Q70 198 74 220" stroke="rgba(0,40,0,0.28)" strokeWidth="1" fill="none" />
    </svg>
  );
}

export default function Home() {
  const isRealUrl = RSVP_URL !== "#";

  return (
    <>
      {/* ── Navigation ── */}
      <nav className="nav">
        <a href="#invite">Invite</a>
        <a href="#activities">Activities</a>
        <a href="#rsvp">RSVP</a>
      </nav>

      {/* ══════════════════════════════════════
          SECTION 1 — Invite
      ══════════════════════════════════════ */}
      <section id="invite" className="page-section invite-section">
        {/* Foreground jungle leaves */}
        <LeafSVG className="leaf leaf--tl" />
        <LeafSVG className="leaf leaf--tr" />
        <LeafSVG className="leaf leaf--bl" />
        <LeafSVG className="leaf leaf--br" />

        {/* The invite card */}
        <div className="invite-card">
          <p className="pre-title">~ You Are Invited ~</p>
          <h1 className="invite-title">Alex&apos;s Birthday Bash!</h1>
          <div className="ornament" aria-hidden="true">❧</div>
          <p className="invite-sub">A Jungle Party in the Garden</p>
          <hr className="card-divider" />
          <div className="invite-details">
            <div className="invite-detail">
              <span className="detail-label">When</span>
              <span className="detail-value">Saturday 23rd May 2026</span>
            </div>
            <div className="invite-detail">
              <span className="detail-label">Time</span>
              <span className="detail-value">5pm onwards</span>
            </div>
            <div className="invite-detail">
              <span className="detail-label">Where</span>
              <span className="detail-value">
                156 Eredine Crescent<br />Milton Keynes, MK5 6GZ
              </span>
            </div>
          </div>
        </div>

        <a href="#activities" className="scroll-hint">
          Discover what&apos;s on ↓
        </a>
      </section>

      {/* ── Botanical divider ── */}
      <div className="vine-divider" aria-hidden="true">
        <span className="vine-divider-leaves">🌿 🌱 🌿</span>
      </div>

      {/* ══════════════════════════════════════
          SECTION 2 — Activities
      ══════════════════════════════════════ */}
      <section id="activities" className="page-section activities-section">
        <LeafSVG className="leaf leaf--tl" />
        <LeafSVG className="leaf leaf--tr" />
        <LeafSVG className="leaf leaf--bl" />
        <LeafSVG className="leaf leaf--br" />

        <div className="section-card">
          <p className="pre-title">~ What&apos;s On ~</p>
          <h2 className="section-heading">The Festivities</h2>

          <div className="activities-list">
            <div className="activity-item">
              <span className="activity-icon">🔥</span>
              <div className="activity-text">
                <h3>BBQ Feast</h3>
                <p>Burgers, ribs, and all the good stuff hot off the grill — food from 5pm</p>
              </div>
            </div>

            <div className="activity-item">
              <span className="activity-icon">🎵</span>
              <div className="activity-text">
                <h3>Music &amp; Dancing</h3>
                <p>Jungle vibes, party anthems and dancing under the stars all evening</p>
              </div>
            </div>

            <div className="activity-item">
              <span className="activity-icon">🎲</span>
              <div className="activity-text">
                <h3>Board Games</h3>
                <p>Classic favourites and garden games — bring your competitive spirit!</p>
              </div>
            </div>
          </div>
        </div>

        <a href="#rsvp" className="scroll-hint">Ready to join? ↓</a>
      </section>

      {/* ── Botanical divider ── */}
      <div className="vine-divider" aria-hidden="true">
        <span className="vine-divider-leaves">🌿 🌱 🌿</span>
      </div>

      {/* ══════════════════════════════════════
          SECTION 3 — RSVP
      ══════════════════════════════════════ */}
      <section id="rsvp" className="page-section rsvp-section">
        <LeafSVG className="leaf leaf--tl" />
        <LeafSVG className="leaf leaf--tr" />
        <LeafSVG className="leaf leaf--bl" />
        <LeafSVG className="leaf leaf--br" />

        <div className="section-card rsvp-card">
          <p className="pre-title">~ Hope to See You There ~</p>
          <h2 className="section-heading">RSVP</h2>
          <p className="rsvp-text">Let us know if you can make it!</p>
          <p className="rsvp-date">Saturday 23rd May 2026 · 5pm onwards</p>
          <a
            href={RSVP_URL}
            className="rsvp-btn"
            {...(isRealUrl
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            Count Me In! 🎉
          </a>
        </div>
      </section>

      {/* ── Ambient effects (client-side) ── */}
      <Effects />
    </>
  );
}
