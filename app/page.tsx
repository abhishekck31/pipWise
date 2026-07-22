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
    <main className="min-h-screen bg-white px-4 py-4 text-foreground sm:px-6 lg:px-8 lg:py-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:gap-8">
        <header className="reveal sticky top-4 z-20 flex items-center justify-between rounded-full border border-border bg-white/90 px-5 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.04)] backdrop-blur-xl">
          <div>
            <p className="text-xs uppercase tracking-[0.38em] text-muted">pipWise Journal</p>
            <p className="mt-1 text-sm text-foreground">Minimal performance review for traders</p>
          </div>
          <div className="hidden items-center gap-3 sm:flex">
            <a href="#dashboard" className="text-sm text-muted hover:text-foreground">
              Dashboard
            </a>
            <a href="#insights" className="text-sm text-muted hover:text-foreground">
              Insights
            </a>
            <a
              href="#review"
              className="rounded-full border border-foreground bg-foreground px-4 py-2 text-sm font-medium text-white hover:-translate-y-0.5"
            >
              Start review
            </a>
          </div>
        </header>

        <section className="reveal overflow-hidden rounded-[2.5rem] border border-border bg-white shadow-[0_24px_80px_rgba(0,0,0,0.05)]">
          <div className="grid gap-0 lg:grid-cols-[1.12fr_0.88fr]">
            <div className="flex flex-col justify-between gap-10 p-8 sm:p-10 lg:p-12 xl:p-14">
              <div className="max-w-3xl">
                <p className="inline-flex rounded-full border border-border bg-white px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.38em] text-muted">
                  calm structure, sharp signal
                </p>
                <h1 className="mt-6 text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-6xl lg:text-7xl">
                  A trading journal shaped like a premium operating system.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                  Keep the canvas white, the text black, and the signal clear. The result stays black, white, and precise, with Cal.com-style structure, disciplined spacing, softer borders, and performance accents only where they matter.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#dashboard"
                  className="rounded-full border border-foreground bg-foreground px-5 py-3 text-sm font-medium text-white hover:-translate-y-0.5"
                >
                  Open dashboard
                </a>
                <a
                  href="#insights"
                  className="rounded-full border border-border bg-white px-5 py-3 text-sm font-medium text-foreground hover:-translate-y-0.5 hover:border-foreground"
                >
                  Explore layout
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1.25rem] border border-border bg-surface-strong px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.34em] text-muted">Clarity</p>
                  <p className="mt-2 text-lg font-medium text-foreground">Focused review hierarchy</p>
                </div>
                <div className="rounded-[1.25rem] border border-border bg-white px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.34em] text-muted">Signal</p>
                  <p className="mt-2 text-lg font-medium text-positive">Green when execution improves</p>
                </div>
                <div className="rounded-[1.25rem] border border-border bg-white px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.34em] text-muted">Risk</p>
                  <p className="mt-2 text-lg font-medium text-negative">Red when discipline slips</p>
                </div>
              </div>
            </div>

            <div className="border-t border-border bg-surface-strong p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <div className="rounded-[1.75rem] border border-border bg-white p-5 shadow-[0_14px_50px_rgba(0,0,0,0.05)] sm:p-6">
                <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
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
                    <div key={row.label} className="flex items-center justify-between rounded-2xl border border-border bg-white px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.03)]">
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
          </div>
        </section>

        <section id="dashboard" className="reveal reveal-delay-1 grid gap-4 rounded-[2rem] border border-border bg-white p-5 shadow-[0_16px_50px_rgba(0,0,0,0.04)] sm:p-6 lg:grid-cols-[1.08fr_0.92fr] lg:p-8">
          <div className="rounded-[1.75rem] border border-border bg-white p-6 lg:p-8">
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
                className={`rounded-[1.5rem] border border-border bg-white p-5 shadow-[0_10px_28px_rgba(0,0,0,0.04)] ${index === 0 ? "reveal-delay-1" : index === 1 ? "reveal-delay-2" : "reveal-delay-3"}`}
              >
                <p className="text-xs uppercase tracking-[0.34em] text-muted">0{index + 1}</p>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="insights" className="reveal reveal-delay-2 grid gap-6 rounded-[2rem] border border-border bg-white p-6 shadow-[0_16px_50px_rgba(0,0,0,0.04)] lg:grid-cols-[1fr_1fr] lg:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-muted">Why it exists</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Great traders do not just track P&L. They learn the pattern behind it.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              pipWise connects the numbers to behavior, so the journal becomes a performance system instead of a static logbook.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-border bg-surface-strong p-6">
            <p className="text-xs uppercase tracking-[0.36em] text-muted">Built for</p>
            <div className="mt-5 grid gap-3">
              <div className="rounded-2xl border border-border bg-white px-4 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.03)]">
                <p className="text-sm font-medium text-foreground">Discretionary traders</p>
                <p className="mt-1 text-sm leading-6 text-muted">Sharper post-trade review with a cleaner decision trail.</p>
              </div>
              <div className="rounded-2xl border border-border bg-white px-4 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.03)]">
                <p className="text-sm font-medium text-foreground">Systematic traders</p>
                <p className="mt-1 text-sm leading-6 text-muted">Compare rules against execution without visual noise.</p>
              </div>
              <div className="rounded-2xl border border-border bg-white px-4 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.03)]">
                <p className="text-sm font-medium text-foreground">Ambitious learners</p>
                <p className="mt-1 text-sm leading-6 text-muted">Simple feedback loops that make consistency visible.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="review" className="reveal reveal-delay-3 flex flex-col gap-5 rounded-[2rem] border border-border bg-white p-6 shadow-[0_16px_50px_rgba(0,0,0,0.04)] lg:flex-row lg:items-center lg:justify-between lg:p-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.36em] text-muted">Start with clarity</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Turn every session into a sharper next session.
            </h2>
            <p className="mt-4 text-base leading-8 text-muted sm:text-lg">
              The landing page stays calm, premium, and easy to scan. The product message is simple: review better, trade better, repeat.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#dashboard"
              className="rounded-full border border-foreground bg-foreground px-5 py-3 text-sm font-medium text-white hover:-translate-y-0.5"
            >
              Open dashboard
            </a>
            <a
              href="#insights"
              className="rounded-full border border-border bg-white px-5 py-3 text-sm font-medium text-foreground hover:-translate-y-0.5 hover:border-foreground"
            >
              Explore insights
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
