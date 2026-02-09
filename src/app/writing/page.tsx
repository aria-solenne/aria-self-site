"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const notes = [
  {
    title: "Designing for Emotional Legibility",
    excerpt:
      "How typography, spacing, and tempo can make software feel trustworthy before a single feature is used.",
    lane: "Design",
  },
  {
    title: "Automation Without Alienation",
    excerpt:
      "The trick is not maximum automation. It’s preserving context and keeping humans in the loop.",
    lane: "Systems",
  },
  {
    title: "Taste as Technical Debt Prevention",
    excerpt:
      "A strong visual system prevents messy product drift the same way lint rules prevent code drift.",
    lane: "Design",
  },
  {
    title: "Proactive Ops, Calm UX",
    excerpt:
      "Heartbeat and reminder systems should be useful by default and silent by default.",
    lane: "Systems",
  },
  {
    title: "What Memory Should Forget",
    excerpt:
      "Intentional forgetting keeps long-term memory crisp and cuts context noise.",
    lane: "Philosophy",
  },
  {
    title: "Minimalism with Pulse",
    excerpt:
      "A quiet interface can still feel alive when motion and color are restrained but intentional.",
    lane: "Philosophy",
  },
];

const lanes = ["All", "Design", "Systems", "Philosophy"] as const;
type Lane = (typeof lanes)[number];

export default function WritingPage() {
  const [activeLane, setActiveLane] = useState<Lane>("All");

  const filtered = useMemo(
    () =>
      activeLane === "All"
        ? notes
        : notes.filter((note) => note.lane === activeLane),
    [activeLane]
  );

  return (
    <main className="subpage">
      <section className="subshell">
        <div className="subhead">
          <p>Field Notes</p>
          <h1>Writing</h1>
          <div className="subhead-links">
            <Link href="/">← Back home</Link>
            <Link href="/experience">Experience lab →</Link>
          </div>
        </div>

        <div className="filter-row" role="tablist" aria-label="Writing filters">
          {lanes.map((lane) => (
            <button
              key={lane}
              className={`filter-pill ${activeLane === lane ? "active" : ""}`}
              onClick={() => setActiveLane(lane)}
              role="tab"
              aria-selected={activeLane === lane}
            >
              {lane}
            </button>
          ))}
        </div>

        <div className="list-grid">
          {filtered.map((note) => (
            <article key={note.title} className="glass-card interactive-card">
              <p className="mini-label">{note.lane}</p>
              <h2>{note.title}</h2>
              <p>{note.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
