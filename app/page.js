const confettiPieces = [
  { left: "4%", duration: "3.6s", delay: "0.5s" },
  { left: "12%", duration: "3.2s", delay: "0.9s" },
  { left: "19%", duration: "4.1s", delay: "0.2s" },
  { left: "27%", duration: "3.5s", delay: "0.8s" },
  { left: "36%", duration: "4.3s", delay: "0.3s" },
  { left: "45%", duration: "3.1s", delay: "1s" },
  { left: "54%", duration: "4s", delay: "0.1s" },
  { left: "62%", duration: "3.4s", delay: "1.2s" },
  { left: "70%", duration: "4.2s", delay: "0.7s" },
  { left: "78%", duration: "3.3s", delay: "0.4s" },
  { left: "86%", duration: "4.4s", delay: "0.6s" },
  { left: "94%", duration: "3.7s", delay: "1.1s" },
];

export default function Home() {
  return (
    <main className="scene">
      <div className="party-item banner">Alex&apos;s Garden BBQ Birthday Bash</div>

      <section className="party-item invite-card">
        <h1>You&apos;re Invited!</h1>
        <p>Join me for a super fun birthday in the garden.</p>
        <p>
          <strong>Date:</strong> May 25th, 1991
        </p>
      </section>

      <div className="party-item grill" aria-hidden="true">
        <div className="smoke"></div>
        <div className="grill-legs"></div>
      </div>

      <div className="party-item cake" aria-hidden="true">
        <div className="candles"></div>
      </div>

      <div className="plants" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, index) => (
          <div className="party-item plant" key={index}></div>
        ))}
      </div>

      <div className="party-item confetti" aria-hidden="true">
        {confettiPieces.map((piece, index) => (
          <span
            className="piece"
            key={index}
            style={{
              left: piece.left,
              animationDuration: piece.duration,
              animationDelay: piece.delay,
            }}
          ></span>
        ))}
      </div>
    </main>
  );
}
