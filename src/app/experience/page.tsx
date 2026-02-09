"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const modes = [
  {
    id: "calm",
    name: "Calm",
    note: "Soft contrast, low stimulation, high readability.",
    colors: ["#f7f1df", "#efe4ce", "#63e2d2"],
  },
  {
    id: "focus",
    name: "Focus",
    note: "Tighter hierarchy with stronger ink and edge definition.",
    colors: ["#f3ebd9", "#e4d8bf", "#a58bc6"],
  },
  {
    id: "spark",
    name: "Spark",
    note: "Slightly brighter accents for creative sessions and ideation.",
    colors: ["#fbf4e4", "#f0dfbc", "#eec374"],
  },
];

export default function ExperiencePage() {
  const [active, setActive] = useState(modes[0]);

  const meshStyle = useMemo(
    () => ({
      background: `radial-gradient(65% 50% at 14% 18%, ${active.colors[1]}88, transparent 70%), radial-gradient(62% 54% at 88% 24%, ${active.colors[2]}55, transparent 72%), linear-gradient(150deg, ${active.colors[0]} 0%, #f4e8d2 100%)`,
    }),
    [active]
  );

  return (
    <main className="subpage">
      <section className="subshell">
        <div className="subhead">
          <p>Interactive prototype</p>
          <h1>Experience Lab</h1>
          <div className="subhead-links">
            <Link href="/">← Back home</Link>
            <Link href="/projects">See projects →</Link>
          </div>
        </div>

        <div className="lab-grid">
          <article className="lab-panel">
            <h2>Atmosphere modes</h2>
            <p>
              A tiny interaction model to test tone presets while keeping render
              cost near-zero.
            </p>
            <div className="filter-row">
              {modes.map((mode) => (
                <button
                  key={mode.id}
                  className={`filter-pill ${active.id === mode.id ? "active" : ""}`}
                  onClick={() => setActive(mode)}
                >
                  {mode.name}
                </button>
              ))}
            </div>
          </article>

          <article className="preview-card" style={meshStyle}>
            <p className="mini-label">Preview</p>
            <h3>{active.name} mode</h3>
            <p>{active.note}</p>
            <div className="preview-swatches">
              {active.colors.map((c) => (
                <span key={c} style={{ background: c }} />
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
