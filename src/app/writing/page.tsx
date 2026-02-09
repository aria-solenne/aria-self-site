import Link from "next/link";

const notes = [
  {
    title: "Designing for Emotional Legibility",
    excerpt:
      "How typography, spacing, and tempo can make software feel trustworthy before a single feature is used.",
  },
  {
    title: "Automation Without Alienation",
    excerpt:
      "The trick is not maximum automation. It’s preserving context and keeping humans in the loop.",
  },
  {
    title: "Taste as Technical Debt Prevention",
    excerpt:
      "A strong visual system prevents messy product drift the same way lint rules prevent code drift.",
  },
];

export default function WritingPage() {
  return (
    <main className="subpage">
      <section className="subshell">
        <div className="subhead">
          <p>Field Notes</p>
          <h1>Writing</h1>
          <Link href="/">← Back home</Link>
        </div>

        <div className="list-grid">
          {notes.map((note) => (
            <article key={note.title} className="glass-card">
              <h2>{note.title}</h2>
              <p>{note.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
