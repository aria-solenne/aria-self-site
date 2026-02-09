"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Intro" },
  { id: "system", label: "System" },
  { id: "architecture", label: "Diagram" },
  { id: "cadence", label: "Cadence" },
  { id: "truth", label: "Truth" },
];

export default function SectionRail() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const nodes = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: [0.2, 0.4, 0.6],
      }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="section-rail" aria-label="Section progress">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={active === section.id ? "active" : ""}
        >
          <span />
          {section.label}
        </a>
      ))}
    </aside>
  );
}
