"use client";

import { useEffect } from "react";

const FIREFLY_COUNT = 22;
const DOT_COUNT = 18;
const NOTE_COUNT = 10;

const NOTE_SYMBOLS = ["♩", "♪", "♫", "♬", "🎵", "🎶"];
const DOT_COLORS = [
  "#ffd700",
  "#ff6b6b",
  "#7ec8e3",
  "#98fb98",
  "#ffb347",
  "#dda0dd",
  "#90ee90",
  "#ff9f80",
];

export default function Effects() {
  useEffect(() => {
    // Remove any previous instance so hot-reload doesn't duplicate elements
    const prev = document.getElementById("__effects-root__");
    if (prev) prev.remove();

    const root = document.createElement("div");
    root.id = "__effects-root__";
    document.body.appendChild(root);

    // ── Fireflies ──────────────────────────────────────────────
    const ffContainer = document.createElement("div");
    ffContainer.className = "fireflies";
    for (let i = 0; i < FIREFLY_COUNT; i++) {
      const el = document.createElement("div");
      el.className = "firefly";
      const dur = 9 + Math.random() * 13;
      const delay = -(Math.random() * dur);
      const fx = (Math.random() - 0.5) * 340;
      const fy = (Math.random() - 0.5) * 340;
      el.style.cssText = [
        `left:${Math.random() * 100}%`,
        `top:${Math.random() * 100}%`,
        `animation-duration:${dur}s`,
        `animation-delay:${delay}s`,
        `--fx:${fx}px`,
        `--fy:${fy}px`,
      ].join(";");
      ffContainer.appendChild(el);
    }
    root.appendChild(ffContainer);

    // ── Confetti dots ──────────────────────────────────────────
    const dotContainer = document.createElement("div");
    dotContainer.className = "confetti-container";
    for (let i = 0; i < DOT_COUNT; i++) {
      const el = document.createElement("div");
      el.className = "dot";
      const size = 6 + Math.random() * 10;
      const dur = 7 + Math.random() * 9;
      const delay = -(Math.random() * dur);
      const color = DOT_COLORS[Math.floor(Math.random() * DOT_COLORS.length)];
      el.style.cssText = [
        `width:${size}px`,
        `height:${size}px`,
        `left:${Math.random() * 100}%`,
        `background:${color}`,
        `animation-duration:${dur}s`,
        `animation-delay:${delay}s`,
      ].join(";");
      dotContainer.appendChild(el);
    }
    root.appendChild(dotContainer);

    // ── Floating music notes ───────────────────────────────────
    const noteContainer = document.createElement("div");
    noteContainer.className = "music-notes-container";
    for (let i = 0; i < NOTE_COUNT; i++) {
      const el = document.createElement("div");
      el.className = "music-note";
      el.textContent =
        NOTE_SYMBOLS[Math.floor(Math.random() * NOTE_SYMBOLS.length)];
      const dur = 12 + Math.random() * 16;
      const delay = -(Math.random() * dur);
      el.style.cssText = [
        `left:${Math.random() * 100}%`,
        `animation-duration:${dur}s`,
        `animation-delay:${delay}s`,
      ].join(";");
      noteContainer.appendChild(el);
    }
    root.appendChild(noteContainer);

    return () => {
      root.remove();
    };
  }, []);

  return null;
}
