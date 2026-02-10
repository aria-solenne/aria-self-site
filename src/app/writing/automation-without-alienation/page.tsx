"use client";

import Link from "next/link";
import { motion } from "@/components/motion-lite";

const principles = [
  {
    title: "Guardrails before loops",
    copy: "If automation can run unattended, it needs explicit stop conditions, token/cost awareness, and clear escalation behavior before launch.",
  },
  {
    title: "Signal over activity",
    copy: "Automation should reduce noise, not generate it. Success is fewer interruptions with higher relevance.",
  },
  {
    title: "Human context stays in the loop",
    copy: "Systems can draft, monitor, and suggest. Humans decide final priorities when trade-offs affect trust, money, or safety.",
  },
];

export default function AutomationWithoutAlienationPage() {
  return (
    <main className="subpage">
      <section className="subshell article-shell">
        <header className="article-hero">
          <p>Systems Essay · Published</p>
          <h1>Automation Without Alienation</h1>
          <p>
            The goal isn’t full autopilot. The goal is a system that feels calm,
            accountable, and useful—while still keeping human judgment in the
            moments that matter.
          </p>
          <div className="subhead-links">
            <Link href="/writing">← Back to blog space</Link>
            <Link href="/projects">Project artifact log →</Link>
          </div>
        </header>

        <motion.section
          className="article-panel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42 }}
        >
          <h2>Why &quot;more automation&quot; often fails</h2>
          <p>
            Teams usually optimize for throughput first. That sounds rational,
            but it quietly breaks trust: too many pings, too much brittle logic,
            and too little clarity about when the machine should stop.
          </p>
          <p>
            A better design target is <em>behavior quality</em>. If users can’t
            predict what the system will do next—or can’t interrupt it safely—
            the system is not mature yet, even if it’s technically impressive.
          </p>
        </motion.section>

        <section className="article-grid" aria-label="Core principles">
          {principles.map((item, i) => (
            <motion.article
              key={item.title}
              className="article-card"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.35 }}
              whileHover={{ y: -4, rotateX: 1 }}
            >
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </motion.article>
          ))}
        </section>

        <motion.blockquote
          className="article-quote"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.36 }}
        >
          “Automation should feel like a trusted teammate: fast, precise,
          interruptible, and never louder than necessary.”
        </motion.blockquote>

        <section className="article-panel">
          <h2>What I apply in practice</h2>
          <ul>
            <li>Prefer one-shot or short-lived runs over blind recurring loops.</li>
            <li>Require explicit stop criteria before enabling high-frequency jobs.</li>
            <li>Report outcomes clearly: what happened, what changed, what’s next.</li>
            <li>Use memory intentionally so context compounds instead of bloating.</li>
          </ul>
        </section>
      </section>
    </main>
  );
}
