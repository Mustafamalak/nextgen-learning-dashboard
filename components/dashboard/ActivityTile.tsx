"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import GlowCard from "@/components/ui/GlowCard";

const WEEKS = 16;
const DAYS = 7;
const DAY_LABELS = ["Mon", "Wed", "Fri"] as const;

/** Generate pseudo-random activity grid (seeded visually) */
function generateGrid(): number[][] {
  return Array.from({ length: WEEKS }, (_, w) =>
    Array.from({ length: DAYS }, (_, d) => {
      // Weighted toward recent weeks + weekdays for a realistic pattern
      const recency = (w + 1) / WEEKS;
      const weekday = d < 5 ? 1 : 0.35;
      return Math.min(1, Math.random() * recency * weekday + Math.random() * 0.2);
    })
  );
}

/** Map activity value [0–1] to an opacity class */
function cellOpacity(value: number): number {
  if (value > 0.8) return 1;
  if (value > 0.6) return 0.65;
  if (value > 0.35) return 0.35;
  if (value > 0.1) return 0.15;
  return 0.05;
}

/**
 * ActivityTile — renders a contribution-style heatmap grid.
 * - No chart library; pure CSS + Framer Motion cells.
 * - Each cell animates in via opacity + scale (no layout shifts).
 */
export default function ActivityTile() {
  // useMemo keeps the grid stable across re-renders
  const grid = useMemo(() => generateGrid(), []);

  return (
    <GlowCard className="h-full">
      <section className="p-5 flex flex-col gap-4 h-full min-h-[180px]">
        <header className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-foreground">
            Learning Activity
          </h2>
          <span className="text-xs text-muted-foreground">16 weeks</span>
        </header>

        {/* Day labels */}
        <div className="flex gap-1 pl-6">
          {DAY_LABELS.map((d) => (
            <span
              key={d}
              className="text-[9px] text-muted-foreground w-3 text-center"
              style={{ marginLeft: d === "Wed" ? "24px" : d === "Fri" ? "24px" : undefined }}
            >
              {d}
            </span>
          ))}
        </div>

        {/* Grid */}
        <div
          role="img"
          aria-label="Learning activity heatmap"
          className="flex gap-1 overflow-x-auto pb-1"
        >
          {grid.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-1">
              {week.map((val, di) => (
                <motion.div
                  key={di}
                  className="w-3 h-3 rounded-[3px] bg-violet-500 shrink-0"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: cellOpacity(val),
                  }}
                  transition={{
                    delay: (wi * DAYS + di) * 0.003,
                    type: "spring",
                    stiffness: 300,
                    damping: 22,
                    opacity: {
                      delay: (wi * DAYS + di) * 0.003,
                      duration: 0.25,
                      ease: "easeOut",
                    },
                  }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Legend */}
        <footer className="flex items-center gap-1.5 mt-auto">
          <span className="text-[10px] text-muted-foreground mr-1">Less</span>
          {[0.05, 0.15, 0.35, 0.65, 1].map((o, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-[3px] bg-violet-500 shrink-0"
              style={{ opacity: o }}
            />
          ))}
          <span className="text-[10px] text-muted-foreground ml-1">More</span>
        </footer>
      </section>
    </GlowCard>
  );
}
