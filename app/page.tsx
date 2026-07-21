import React from "react";
import { HeroCard } from "./components/hero-card";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.25),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)] px-6 py-16 text-zinc-50 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur xl:p-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-4 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
                pipWise trading journal
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                pipWise Trading Journal
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-300">
                Track your trades, review your habits, and build clarity with every decision.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#features"
                  className="rounded-full bg-emerald-400 px-5 py-3 font-medium text-slate-950 transition hover:bg-emerald-300"
                >
                  Explore the product
                </a>
                <a
                  href="#story"
                  className="rounded-full border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/10"
                >
                  See how it works
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-sm text-zinc-300 shadow-lg shadow-black/20">
              <p className="text-2xl font-semibold text-white">Built for serious traders</p>
              <p className="mt-2 max-w-xs leading-7">
                Capture every setup, every lesson, and every emotional shift in one calm command center.
              </p>
            </div>
          </div>
        </section>

        <section id="features" className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Trade memory",
              body: "Log entries, exits, risk, and notes without losing the story behind the move.",
            },
            {
              title: "Mindset tracking",
              body: "Capture the emotional context that often explains the best and worst decisions.",
            },
            {
              title: "Reflection engine",
              body: "Turn your past trades into repeatable habits with thoughtful review prompts.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-6">
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{item.body}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-4 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-xl shadow-black/20 sm:grid-cols-3 sm:p-8">
          <HeroCard title="Clarity" value="Turn each trade into a decision you can learn from" />
          <HeroCard title="Consistency" value="Build routines that make your review process effortless" />
          <HeroCard title="Confidence" value="Use evidence, not emotion, to shape your next move" />
        </section>

        <section id="story" className="grid gap-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-xl shadow-black/20 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Why it exists</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Great traders don’t just track P&L — they understand themselves.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
              pipWise helps you connect the numbers to the psychology, so your trading journal becomes a true performance system, not just a logbook.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-emerald-400/20 bg-emerald-400/10 p-6 text-zinc-200">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Designed for</p>
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
