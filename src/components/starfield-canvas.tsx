"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  r: number;
  a: number;
  tw: number;
};

type Walker = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  hue: number;
  life: number;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    let frame = 0;
    let raf = 0;

    const stars: Star[] = [];
    const walkers: Walker[] = [];

    const setup = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      stars.length = 0;
      walkers.length = 0;

      const starCount = clamp(Math.floor((w * h) / 17000), 70, 140);
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.4 + 0.2,
          a: Math.random() * 0.52 + 0.14,
          tw: Math.random() * Math.PI * 2,
        });
      }

      const walkerCount = prefersReduced ? 0 : clamp(Math.floor((w * h) / 110000), 10, 24);
      for (let i = 0; i < walkerCount; i++) {
        walkers.push({
          x: w * (0.15 + Math.random() * 0.7),
          y: h * (0.15 + Math.random() * 0.7),
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          hue: 42 + Math.random() * 22, // gold-ish
          life: 80 + Math.random() * 120,
        });
      }

      ctx.lineCap = "round";
      ctx.lineJoin = "round";
    };

    const flowAngle = (x: number, y: number) => {
      // A cheap, smooth-ish pseudo-field. Not Perlin, but it looks alive.
      const s1 = Math.sin(x * 0.006 + frame * 0.8);
      const s2 = Math.cos(y * 0.006 - frame * 0.65);
      const s3 = Math.sin((x + y) * 0.004 + frame * 0.35);
      return (s1 + s2 + s3) * 1.25;
    };

    const render = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      // gentle fade for trails
      ctx.fillStyle = "rgba(12, 12, 16, 0.08)";
      ctx.fillRect(0, 0, w, h);

      frame += 0.012;

      // stars
      for (const s of stars) {
        const alpha = s.a + Math.sin(frame + s.tw) * 0.12;
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 226, 170, ${Math.max(alpha, 0.06)})`;
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // algorithmic walkers (flow-field scribbles)
      for (const p of walkers) {
        const a = flowAngle(p.x, p.y);
        p.vx = p.vx * 0.85 + Math.cos(a) * 0.55;
        p.vy = p.vy * 0.85 + Math.sin(a) * 0.55;

        const nx = p.x + p.vx;
        const ny = p.y + p.vy;

        ctx.beginPath();
        ctx.strokeStyle = `hsla(${p.hue}, 92%, 62%, 0.14)`;
        ctx.lineWidth = 1.15;
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(nx, ny);
        ctx.stroke();

        p.x = nx;
        p.y = ny;
        p.life -= 1;

        const out = p.x < -30 || p.x > w + 30 || p.y < -30 || p.y > h + 30;
        if (p.life <= 0 || out) {
          p.x = w * (0.12 + Math.random() * 0.76);
          p.y = h * (0.12 + Math.random() * 0.76);
          p.vx = (Math.random() - 0.5) * 0.6;
          p.vy = (Math.random() - 0.5) * 0.6;
          p.hue = 38 + Math.random() * 30;
          p.life = 90 + Math.random() * 150;
        }
      }

      raf = requestAnimationFrame(render);
    };

    setup();

    // prime the canvas background so trails look good
    ctx.fillStyle = "rgba(12, 12, 16, 1)";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    render();

    const onResize = () => setup();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield" aria-hidden="true" />;
}
