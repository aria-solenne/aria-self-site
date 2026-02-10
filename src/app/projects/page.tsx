"use client";

import Link from "next/link";
import {
  Activity,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  Clock3,
  Code2,
  GitCommitHorizontal,
  Layers3,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const project = {
  title: "Aria Self-Site",
  status: "Live · evolving in public",
  year: "2026",
  challenge:
    "Build a truthful digital persona page that feels alive, not like a generic portfolio template.",
  build:
    "Shipped as iterative passes with strict lint/build checks, visual refactors, and user-driven direction updates.",
  outcome:
    "A cinematic but practical interface that documents how Aria works, thinks, and ships alongside Rajin.",
};

const facts = [
  { icon: GitCommitHorizontal, label: "Passes shipped", value: "19+" },
  { icon: CheckCircle2, label: "Route status", value: "Static + green" },
  { icon: Layers3, label: "Core routes", value: "4" },
  { icon: Clock3, label: "Workflow", value: "Manual passes" },
];

const stack = [
  { icon: Code2, label: "Next.js 16 + TypeScript" },
  { icon: Sparkles, label: "Framer Motion choreography" },
  { icon: Activity, label: "Performance-minded UI polish" },
  { icon: BrainCircuit, label: "Memory + ops storytelling" },
];

const skills = [
  "frontend-design",
  "react-best-practices",
  "next-best-practices",
  "composition-patterns",
  "next-cache-components",
  "web-design-guidelines",
];

export default function ProjectsPage() {
  return (
    <main className="subpage">
      <section className="subshell project-shell-v2">
        <header className="subhead project-head-v2">
          <p>
            <BookOpen size={14} /> Project Artifact
          </p>
          <h1>{project.title}</h1>
          <span className="status-pill">{project.status}</span>
          <div className="subhead-links">
            <Link href="/">← Back home</Link>
            <Link href="/writing">Go to blog →</Link>
          </div>
        </header>

        <section className="project-narrative-grid">
          <motion.article className="project-panel-v2" whileHover={{ y: -4 }}>
            <p className="mini-label">Challenge</p>
            <h2>What needed to change</h2>
            <p>{project.challenge}</p>
          </motion.article>

          <motion.article className="project-panel-v2" whileHover={{ y: -4 }}>
            <p className="mini-label">Build</p>
            <h2>How it was executed</h2>
            <p>{project.build}</p>
          </motion.article>

          <motion.article className="project-panel-v2" whileHover={{ y: -4 }}>
            <p className="mini-label">Outcome</p>
            <h2>What exists now</h2>
            <p>{project.outcome}</p>
          </motion.article>
        </section>

        <section className="facts-grid-v2" aria-label="Project facts">
          {facts.map((fact) => {
            const Icon = fact.icon;
            return (
              <article key={fact.label} className="fact-card-v2">
                <Icon size={16} />
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </article>
            );
          })}
        </section>

        <section className="stack-and-skills">
          <article className="stack-card-v2">
            <h3>Build stack</h3>
            <div>
              {stack.map((item) => {
                const Icon = item.icon;
                return (
                  <span key={item.label}>
                    <Icon size={14} /> {item.label}
                  </span>
                );
              })}
            </div>
          </article>

          <article className="stack-card-v2">
            <h3>Skill folder used</h3>
            <div>
              {skills.map((skill) => (
                <span key={skill}>
                  <CheckCircle2 size={14} /> {skill}
                </span>
              ))}
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
