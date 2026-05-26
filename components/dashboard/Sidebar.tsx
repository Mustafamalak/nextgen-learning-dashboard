"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  Activity,
  Target,
  Zap,
} from "lucide-react";

const NAV_ITEMS = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "courses", label: "Courses", icon: BookOpen },
  { id: "activity", label: "Activity", icon: Activity },
  { id: "goals", label: "Goals", icon: Target },
] as const;

type NavId = (typeof NAV_ITEMS)[number]["id"];

/**
 * Sidebar with three responsive modes:
 * - Desktop (md+):  left sidebar with icon + label
 * - Tablet  (sm):   icon-only sidebar
 * - Mobile  (<sm):  fixed bottom navigation bar
 */
export default function Sidebar() {
  const [active, setActive] = useState<NavId>("overview");

  return (
    <>
      {/* ── Desktop + Tablet left sidebar ─────────────────────── */}
      <aside className="hidden sm:flex flex-col h-full bg-card border-r border-white/[0.06] w-[64px] md:w-56 shrink-0 py-6 px-2 md:px-3">
        {/* Logo mark */}
        <div className="flex items-center gap-3 px-1 mb-8">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shrink-0 shadow-lg shadow-violet-900/40">
            <Zap size={14} className="text-white" fill="currentColor" />
          </div>
          <span className="hidden md:block text-sm font-bold text-foreground tracking-wide">
            NextGen
          </span>
        </div>

        {/* Navigation */}
        <nav aria-label="Main navigation">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map(({ id, label, icon: Icon }) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <button
                    onClick={() => setActive(id)}
                    aria-current={isActive ? "page" : undefined}
                    className="relative flex items-center gap-3 w-full px-2 py-2.5 rounded-xl text-left cursor-pointer"
                  >
                    {/* Animated active highlight */}
                    {isActive && (
                      <motion.span
                        layoutId="sidebar-highlight"
                        className="absolute inset-0 rounded-xl bg-violet-600/10 border border-violet-500/20"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                      />
                    )}

                    <Icon
                      size={18}
                      className={`relative z-10 shrink-0 transition-colors duration-150 ${
                        isActive
                          ? "text-violet-400"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    />
                    <span
                      className={`hidden md:block relative z-10 text-sm font-medium transition-colors duration-150 ${
                        isActive ? "text-violet-300" : "text-muted-foreground"
                      }`}
                    >
                      {label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* ── Mobile bottom navigation bar ──────────────────────── */}
      <nav
        aria-label="Mobile navigation"
        className="fixed bottom-0 left-0 right-0 z-50 sm:hidden flex items-center justify-around bg-card/90 backdrop-blur-md border-t border-white/[0.06] px-2 pt-2 pb-3"
      >
        {NAV_ITEMS.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => setActive(id)}
              aria-current={isActive ? "page" : undefined}
              className="relative flex flex-col items-center gap-1 px-4 py-1.5 rounded-xl"
            >
              {isActive && (
                <motion.span
                  layoutId="mobile-highlight"
                  className="absolute inset-0 rounded-xl bg-violet-600/15"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <Icon
                size={20}
                className={`relative z-10 transition-colors duration-150 ${
                  isActive ? "text-violet-400" : "text-muted-foreground"
                }`}
              />
              <span
                className={`relative z-10 text-[10px] font-medium leading-none transition-colors duration-150 ${
                  isActive ? "text-violet-400" : "text-muted-foreground"
                }`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
