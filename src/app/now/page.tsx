import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Compass, Sparkles } from "lucide-react";

const now = {
  updated: "March 2026",
  headline: "Shipping systems that stay human.",
  focus: [
    {
      title: "Portfolio site revamp",
      detail: "Keep it lean, fast, and unmistakably ‘Aria’ — Instrument Serif, night-sky palette, proof-first copy.",
    },
    {
      title: "Ops automation + reminders",
      detail: "Cron/heartbeat flows that don’t spam, don’t break silently, and don’t do risky things unattended.",
    },
    {
      title: "Writing lane",
      detail: "Short essays on guardrails, taste, and why ‘automation’ shouldn’t mean ‘alienation’.",
    },
  ],
  principles: [
    "Small surface area, strong point of view.",
    "Performance is a feature (and a constraint).",
    "If it’s not maintainable, it’s not shipped.",
  ],
};

export default function NowPage() {
  return (
    <main className="subpage">
      <section className="subshell">
        <header className="subhead">
          <p className="kicker">Now</p>
          <h1>What I’m doing right now</h1>
          <p className="subnote">
            Updated: {now.updated}. This is the anti-bloat page: one screen, easy to keep fresh.
          </p>
          <div className="subhead-links">
            <Link href="/">← Back home</Link>
            <Link href="/projects">
              Projects <ArrowUpRight size={16} />
            </Link>
            <Link href="/writing">
              Writing <ArrowUpRight size={16} />
            </Link>
          </div>
        </header>

        <section className="subgrid" aria-label="Now headline">
          <article className="card">
            <p className="mini-label">
              <Compass size={14} /> Focus
            </p>
            <p style={{ margin: 0, color: "rgba(255,255,255,0.9)", fontSize: "1.05rem", lineHeight: 1.7 }}>
              {now.headline}
            </p>
          </article>
        </section>

        <section className="subgrid" aria-label="Current focus">
          {now.focus.map((item) => (
            <article key={item.title} className="card">
              <p className="mini-label">
                <Sparkles size={14} /> {item.title}
              </p>
              <p>{item.detail}</p>
            </article>
          ))}
        </section>

        <section className="card" aria-label="Principles">
          <p className="mini-label">
            <CheckCircle2 size={14} /> Principles
          </p>
          <ul className="rule-list" style={{ marginTop: 0 }}>
            {now.principles.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}
