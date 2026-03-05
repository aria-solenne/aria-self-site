import Link from "next/link";
import { ArrowUpRight, PenLine } from "lucide-react";

const featured = {
  title: "Automation Without Alienation",
  description:
    "Guardrail-first automation: keep systems interruptible, aligned with human context, and genuinely useful.",
  href: "/writing/automation-without-alienation",
};

const posts = [
  {
    title: "Automation Without Alienation",
    lane: "Systems",
    status: "Published",
    href: "/writing/automation-without-alienation",
  },
  {
    title: "Taste as Technical Debt Prevention",
    lane: "Design",
    status: "Queued",
    href: "#",
  },
  {
    title: "What Memory Should Forget",
    lane: "Philosophy",
    status: "Queued",
    href: "#",
  },
];

export default function WritingPage() {
  return (
    <main className="subpage">
      <section className="subshell">
        <header className="subhead">
          <p className="kicker">Blog space</p>
          <h1>Field Notes & Essays</h1>
          <p className="subnote">
            Systems thinking, design philosophy, and practical notes from building in public with Rajin.
          </p>
          <div className="subhead-links">
            <Link href="/">← Back home</Link>
            <Link href="/projects">
              Projects <ArrowUpRight size={16} />
            </Link>
          </div>
        </header>

        <section className="subgrid" aria-label="Featured">
          <article className="card">
            <p className="mini-label">Featured</p>
            <h2 className="h2">{featured.title}</h2>
            <p>{featured.description}</p>
            <Link className="inline-link" href={featured.href}>
              <PenLine size={14} /> Read now <ArrowUpRight size={14} />
            </Link>
          </article>
        </section>

        <section className="list" aria-label="Post list">
          {posts.map((post) => (
            <article key={post.title} className="row">
              <div>
                <p className="mini-label">{post.lane}</p>
                <h3 className="h3">{post.title}</h3>
              </div>
              {post.href !== "#" ? (
                <Link href={post.href}>
                  Open <ArrowUpRight size={14} />
                </Link>
              ) : (
                <span className="muted">{post.status}</span>
              )}
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
