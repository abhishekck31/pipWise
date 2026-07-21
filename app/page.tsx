import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-6 py-24 text-zinc-50">
      <div className="w-full max-w-4xl rounded-3xl border border-zinc-800 bg-zinc-900/80 p-10 shadow-2xl shadow-black/20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
          pipWise trading journal
        </p>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
          pipWise Trading Journal
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
          Track your trades, review your habits, and grow with better decision-making.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 px-5 py-4">
            <p className="text-2xl font-semibold text-white">100%</p>
            <p className="text-sm text-zinc-400">Personalized trade tracking</p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 px-5 py-4">
            <p className="text-2xl font-semibold text-white">24/7</p>
            <p className="text-sm text-zinc-400">Review your mindset and edge</p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 px-5 py-4">
            <p className="text-2xl font-semibold text-white">Built</p>
            <p className="text-sm text-zinc-400">For thoughtful traders</p>
          </div>
        </div>
      </div>
    </main>
  );
}
