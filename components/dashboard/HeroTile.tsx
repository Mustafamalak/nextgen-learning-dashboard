import GlowCard from "@/components/ui/GlowCard";
import { Flame, Trophy } from "lucide-react";

/**
 * Hero tile — Server Component.
 * Renders welcome message and learning streak using GlowCard (Client Component).
 * No hooks or client-side APIs needed here.
 */
export default function HeroTile() {
  return (
    <GlowCard className="h-full min-h-[180px]">
      <div className="relative h-full p-6 flex flex-col justify-between overflow-hidden">
        {/* Futuristic gradient layer */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.22) 0%, rgba(99,102,241,0.1) 45%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
          aria-hidden="true"
        />

        {/* Corner accent glow */}
        <div
          className="absolute -top-10 -right-10 w-48 h-48 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <section className="relative z-10">
          <p className="text-xs font-semibold text-violet-400/70 tracking-[0.18em] uppercase mb-2">
            Welcome back
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Mustafa
          </h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-xs">
            You&apos;re on a roll — keep the momentum going.
          </p>
        </section>

        <footer className="relative z-10 flex flex-wrap items-center gap-3 mt-5">
          <div className="flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1.5">
            <Flame size={13} className="text-orange-400" />
            <span className="text-xs font-semibold text-orange-300">
              7 day streak
            </span>
          </div>
          <div className="flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-3 py-1.5">
            <Trophy size={13} className="text-violet-400" />
            <span className="text-xs font-semibold text-violet-300">
              Top learner
            </span>
          </div>
        </footer>
      </div>
    </GlowCard>
  );
}
