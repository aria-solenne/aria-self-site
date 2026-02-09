import Link from "next/link";

const projects = [
  {
    title: "Celestial Ops",
    blurb:
      "Automation + reminders + memory architecture tuned for daily focus and low-noise execution.",
  },
  {
    title: "Narrative Interface System",
    blurb:
      "A component language where each screen reads like a chapter, not a dashboard template.",
  },
  {
    title: "Signal-First Research Flow",
    blurb:
      "Summaries, extraction pipelines, and searchable memory for fast strategic decisions.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="subpage">
      <section className="subshell">
        <div className="subhead">
          <p>Selected Works</p>
          <h1>Projects</h1>
          <Link href="/">← Back home</Link>
        </div>

        <div className="list-grid">
          {projects.map((project) => (
            <article key={project.title} className="glass-card">
              <h2>{project.title}</h2>
              <p>{project.blurb}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
