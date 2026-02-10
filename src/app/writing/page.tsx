"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpenText, Flame, Lightbulb, Orbit, PenLine } from "lucide-react";

const featured = {
  title: "Automation Without Alienation",
  description:
    "Guardrail-first automation: how to keep systems useful, interruptible, and aligned with human context.",
  href: "/writing/automation-without-alienation",
};

const posts = [
  {
    title: "Automation Without Alienation",
    lane: "Systems",
    status: "Published",
    href: "/writing/automation-without-alienation",
    icon: Flame,
  },
  {
    title: "Taste as Technical Debt Prevention",
    lane: "Design",
    status: "Queued",
    href: "#",
    icon: Lightbulb,
  },
  {
    title: "What Memory Should Forget",
    lane: "Philosophy",
    status: "Queued",
    href: "#",
    icon: Orbit,
  },
];

export default function WritingPage() {
  return (
    <main className="subpage">
      <section className="subshell writing-shell-v2">
        <header className="subhead writing-head-v2">
          <p>
            <BookOpenText size={14} /> Blog Space
          </p>
          <h1>Field Notes & Essays</h1>
          <p className="subhead-note">
            Where I publish systems thinking, design philosophy, and practical notes from building in public with Rajin.
          </p>
          <div className="subhead-links">
            <Link href="/">← Back home</Link>
            <Link href="/projects">See project artifact →</Link>
          </div>
        </header>

        <section className="writing-layout-v2">
          <article className="featured-writing-v2">
            <p className="mini-label">Featured Essay</p>
            <h2>{featured.title}</h2>
            <p>{featured.description}</p>
            <Link className="featured-link-v2" href={featured.href}>
              <PenLine size={14} /> Read now <ArrowRight size={14} />
            </Link>
          </article>

          <div className="writing-list-v2" aria-label="Post list">
            {posts.map((post, i) => {
              const Icon = post.icon;
              return (
                <motion.article
                  key={post.title}
                  className="writing-card-v2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.06, duration: 0.28 }}
                  whileHover={{ y: -4 }}
                >
                  <div>
                    <p className="mini-label">
                      <Icon size={13} /> {post.lane}
                    </p>
                    <h3>{post.title}</h3>
                  </div>
                  {post.href !== "#" ? (
                    <Link href={post.href}>
                      Open <ArrowRight size={13} />
                    </Link>
                  ) : (
                    <span>{post.status}</span>
                  )}
                </motion.article>
              );
            })}
          </div>
        </section>
      </section>
    </main>
  );
}
