import React from "react";
import { HeroCard } from "./components/hero-card";

const featureCards = [
  {
    title: "Trade memory",
    body: "Capture every setup, entry, exit, and lesson in one disciplined record.",
  },
  {
    title: "Mindset tracking",
    body: "Reveal the emotional context behind the decisions that matter most.",
  },
  {
    title: "Reflection engine",
    body: "Turn each review into a repeatable system, not just a scrapbook of trades.",
  },
];

const performanceRows = [
  { label: "Win rate", value: "64%", change: "+8%", tone: "positive" as const },
  { label: "Average R", value: "+1.8R", change: "+0.4R", tone: "positive" as const },
  { label: "Drawdown", value: "-2.1%", change: "-0.6%", tone: "negative" as const },
  { label: "Rule breaks", value: "3", change: "-4", tone: "positive" as const },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.07),_transparent_24%),linear-gradient(180deg,_#050505_0%,_#080808_52%,_#050505_100%)] px-4 py-4 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4">
        <section className="reveal overflow-hidden rounded-[2rem] border border-border bg-surface/85 p-6 shadow-[0_40px_140px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-8 xl:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full border border-border bg-white/5 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.38em] text-muted">
                pipWise Journal • discipline over impulse
              </p>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Modern trading review, stripped to signal.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                Track trades, review execution, and surface the habits that move P&L. The interface stays black, white, and precise, with red and green used only where performance deserves attention.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#dashboard"
                  className="rounded-full border border-foreground bg-foreground px-5 py-3 text-sm font-medium text-background hover:-translate-y-0.5 hover:bg-transparent hover:text-foreground"
                >
                  Open dashboard
                </a>
                <a
                  href="#insights"
                  className="rounded-full border border-border bg-transparent px-5 py-3 text-sm font-medium text-foreground hover:-translate-y-0.5 hover:border-foreground hover:bg-white/5"
                >
                  See insights
                </a>
              </div>
            </div>

            <div className="w-full max-w-lg rounded-[1.75rem] border border-border bg-surface-strong p-5 shadow-[0_18px_80px_rgba(0,0,0,0.4)] sm:p-6">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-muted">Live review</p>
                  <p className="mt-2 text-2xl font-semibold text-foreground">Execution snapshot</p>
                </div>
                <div className="rounded-full border border-positive/30 bg-positive/10 px-3 py-1 text-sm font-medium text-positive">
                  +1.8R
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <HeroCard title="Bias" value="Neutral and measured" />
                <HeroCard title="Focus" value="Rules followed in 91% of trades" tone="positive" />
              </div>
              <div className="mt-5 grid gap-3">
                {performanceRows.map((row) => (
                  <div key={row.label} className="flex items-center justify-between rounded-2xl border border-border bg-black/30 px-4 py-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.32em] text-muted">{row.label}</p>
                      <p className="mt-1 text-lg font-medium text-foreground">{row.value}</p>
                    </div>
                    <span className={row.tone === "positive" ? "text-positive" : "text-negative"}>
                      {row.change}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="dashboard" className="reveal reveal-delay-1 grid gap-4 rounded-[2rem] border border-border bg-surface/85 p-5 shadow-[0_24px_90px_rgba(0,0,0,0.35)] sm:p-6 lg:grid-cols-[1.05fr_0.95fr] lg:p-8">
          <div className="rounded-[1.75rem] border border-border bg-black/25 p-6">
            <p className="text-xs uppercase tracking-[0.36em] text-muted">System view</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Minimal interface. Maximum accountability.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Every surface is designed to stay out of the way. Clean contrast keeps the focus on trades, while restrained motion and thin borders add the premium SaaS feel.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <HeroCard title="Signal" value="Green when the process is working" tone="positive" />
              <HeroCard title="Risk" value="Red when the plan drifts" tone="negative" />
              <HeroCard title="Review" value="White space for calm decisions" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {featureCards.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-[1.5rem] border border-border bg-surface-strong p-5 ${index === 0 ? "reveal-delay-1" : index === 1 ? "reveal-delay-2" : "reveal-delay-3"}`}
              >
                <p className="text-xs uppercase tracking-[0.34em] text-muted">0{index + 1}</p>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="reveal reveal-delay-2 grid gap-4 rounded-[2rem] border border-border bg-surface/85 p-5 shadow-[0_24px_90px_rgba(0,0,0,0.3)] sm:grid-cols-3 sm:p-6 lg:p-8">
          <HeroCard title="Clarity" value="Every trade reads like a decision log" />
          <HeroCard title="Consistency" value="Routine stays visible, measurable, and repeatable" tone="positive" />
          <HeroCard title="Resilience" value="Risk stays obvious when the plan starts to slip" tone="negative" />
        </section>

        <section id="insights" className="reveal reveal-delay-3 grid gap-6 rounded-[2rem] border border-border bg-surface/85 p-6 shadow-[0_24px_90px_rgba(0,0,0,0.3)] lg:grid-cols-[1.05fr_0.95fr] lg:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-muted">Why it exists</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Great traders do not just track P&L. They learn the pattern behind it.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              pipWise connects the numbers to behavior, so the journal becomes a performance system instead of a static logbook.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-border bg-black/30 p-6 text-muted">
            <p className="text-xs uppercase tracking-[0.36em] text-foreground">Built for</p>
            <ul className="mt-4 space-y-3 text-sm leading-7">
              <li>Discretionary traders seeking sharper post-trade review</li>
              <li>Systematic traders comparing rules against actual execution</li>
              <li>Ambitious learners refining consistency with simple feedback loops</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
