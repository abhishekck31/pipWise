import React from "react";

export function HeroCard({
  title,
  value,
  tone = "neutral",
}: {
  title: string;
  value: string;
  tone?: "neutral" | "positive" | "negative";
}) {
  const toneClass =
    tone === "positive"
      ? "text-positive"
      : tone === "negative"
        ? "text-negative"
        : "text-foreground";

  return (
    <div className="rounded-[1.5rem] border border-border bg-white p-4 shadow-[0_18px_60px_rgba(0,0,0,0.04)] backdrop-blur-sm">
      <p className="text-[0.72rem] uppercase tracking-[0.36em] text-muted">{title}</p>
      <p className={`mt-3 text-lg font-medium leading-7 ${toneClass}`}>{value}</p>
    </div>
  );
}
