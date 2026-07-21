import React from "react";
import { HeroCard } from "./components/hero-card";

const featureCards = [
  {
    title: "Trade memory",
    body: "Capture every setup, entry, exit, and lesson in one elegant workspace.",
  },
  {
    title: "Mindset tracking",
    body: "Reveal the emotional context that shapes your toughest decisions.",
  },
  {
    title: "Reflection engine",
    body: "Turn every review into a system of habits, not just a scrapbook of trades.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.25),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)] px-6 py-16 text-zinc-50 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl xl:p-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-4 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">
                pipWise • The trading journal for founders of discipline
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                pipWise Trading Journal
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                Track your trades, review your habits, and build clarity with every decision.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#launch"
                  className="rounded-full bg-emerald-400 px-5 py-3 font-medium text-slate-950 transition hover:bg-emerald-300"
                >
                  Launch the experience
                </a>
                <a
                  href="#story"
                  className="rounded-full border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/10"
                >
                  Why it matters
                </a>
              </div>
            </div>
            <div className="w-full max-w-md rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6 text-sm text-zinc-300 shadow-2xl shadow-black/40">
              <p className="text-2xl font-semibold text-white">Built for serious traders</p>
              <p className="mt-3 leading-7">
                Capture every setup, every lesson, and every emotional shift in one calm command center designed for focus.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <HeroCard title="Clarity" value="Learn from each decision" />
                <HeroCard title="Momentum" value="Stay consistent over time" />
              </div>
            </div>
          </div>
        </section>

        <section id="launch" className="grid gap-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">A premium workflow</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Think like a team. Review like a pro.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
              From the first trade to the final reflection, pipWise gives you a deliberate way to turn raw experience into lasting advantage.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featureCards.map((item) => (
              <article key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-400">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-4 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.2)] sm:grid-cols-3 sm:p-8">
          <HeroCard title="Clarity" value="Turn each trade into a decision you can learn from" />
          <HeroCard title="Consistency" value="Build routines that make your review process effortless" />
          <HeroCard title="Confidence" value="Use evidence, not emotion, to shape your next move" />
        </section>

        <section id="story" className="grid gap-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.2)] lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">Why it exists</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Great traders don’t just track P&L — they understand themselves.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
              pipWise helps you connect the numbers to the psychology, so your trading journal becomes a true performance system, not just a logbook.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-emerald-400/20 bg-emerald-400/10 p-6 text-zinc-200">
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">Built for</p>
            <ul className="mt-4 space-y-3 text-sm leading-7">
              <li>• discretionary traders seeking clarity</li>
              <li>• systematic traders building consistency</li>
              <li>• ambitious learners refining execution</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
