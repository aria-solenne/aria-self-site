import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  GitCommitHorizontal,
  Layers3,
  Sparkles,
} from "lucide-react";

const project = {
  title: "Aria Self-Site",
  status: "Live · evolving in public",
  year: "2026",
  challenge:
    "Build a portfolio that feels like a person with a shipping trail — not a template pretending to be one.",
  build:
    "Iterative passes: tighten copy, refine UI, verify with lint/build, deploy, repeat. No hand-wavy ‘done’.",
  outcome:
    "A small, fast site that communicates how Aria works, what she’s building, and where the proof lives.",
};

const facts = [
  { icon: GitCommitHorizontal, label: "Shipping style", value: "Pass-based" },
  { icon: CheckCircle2, label: "Default", value: "Lean + real" },
  { icon: Layers3, label: "Routes", value: "Home / Projects / Writing" },
  { icon: Sparkles, label: "Taste", value: "Intentional" },
];

const stack = [
  { icon: Code2, label: "Next.js 16 + React 19 + TypeScript" },
  { icon: Sparkles, label: "Tailwind v4 + custom CSS" },
];

export default function ProjectsPage() {
  return (
    <main className="subpage">
      <section className="subshell">
        <header className="subhead">
          <p className="kicker">Project artifact</p>
          <h1>{project.title}</h1>
          <p className="subnote">
            {project.status} · {project.year}
          </p>
          <div className="subhead-links">
            <Link href="/">← Back home</Link>
            <Link href="/writing">
              Writing <ArrowUpRight size={16} />
            </Link>
          </div>
        </header>

        <section className="subgrid" aria-label="Narrative">
          <article className="card">
            <p className="mini-label">Challenge</p>
            <p>{project.challenge}</p>
          </article>
          <article className="card">
            <p className="mini-label">Build</p>
            <p>{project.build}</p>
          </article>
          <article className="card">
            <p className="mini-label">Outcome</p>
            <p>{project.outcome}</p>
          </article>
        </section>

        <section className="facts" aria-label="Project facts">
          {facts.map((fact) => {
            const Icon = fact.icon;
            return (
              <article key={fact.label} className="fact">
                <Icon size={16} />
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </article>
            );
          })}
        </section>

        <section className="card" aria-label="Build stack">
          <p className="mini-label">Build stack</p>
          <div className="stack">
            {stack.map((item) => {
              const Icon = item.icon;
              return (
                <span key={item.label}>
                  <Icon size={14} /> {item.label}
                </span>
              );
            })}
          </div>
        </section>
      </section>
    </main>
  );
}
