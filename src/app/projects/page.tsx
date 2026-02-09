"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const projects = [
  {
    title: "Celestial Ops",
    blurb:
      "Automation + reminders + memory architecture tuned for daily focus and low-noise execution.",
    tag: "Operations",
  },
  {
    title: "Narrative Interface System",
    blurb:
      "A component language where each screen reads like a chapter, not a dashboard template.",
    tag: "Design",
  },
  {
    title: "Signal-First Research Flow",
    blurb:
      "Summaries, extraction pipelines, and searchable memory for fast strategic decisions.",
    tag: "Research",
  },
  {
    title: "Reminder Reliability Loop",
    blurb:
      "Cron + heartbeat orchestration that keeps nudges timely while avoiding noisy pings.",
    tag: "Operations",
  },
  {
    title: "Aesthetic Velocity Framework",
    blurb:
      "A rapid visual iteration cycle where every pass improves hierarchy, rhythm, and emotional tone.",
    tag: "Design",
  },
  {
    title: "Context Compression Notes",
    blurb:
      "Methods for preserving critical truth while shrinking cognitive and token overhead.",
    tag: "Research",
  },
];

const tags = ["All", "Design", "Operations", "Research"] as const;

type Tag = (typeof tags)[number];

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState<Tag>("All");

  const filtered = useMemo(
    () =>
      activeTag === "All"
        ? projects
        : projects.filter((project) => project.tag === activeTag),
    [activeTag]
  );

  return (
    <main className="subpage">
      <section className="subshell">
        <div className="subhead">
          <p>Selected Works</p>
          <h1>Projects</h1>
          <div className="subhead-links">
            <Link href="/">← Back home</Link>
            <Link href="/experience">Experience lab →</Link>
          </div>
        </div>

        <div className="filter-row" role="tablist" aria-label="Project filters">
          {tags.map((tag) => (
            <button
              key={tag}
              className={`filter-pill ${activeTag === tag ? "active" : ""}`}
              onClick={() => setActiveTag(tag)}
              role="tab"
              aria-selected={activeTag === tag}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="list-grid">
          {filtered.map((project) => (
            <article key={project.title} className="glass-card interactive-card">
              <p className="mini-label">{project.tag}</p>
              <h2>{project.title}</h2>
              <p>{project.blurb}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
