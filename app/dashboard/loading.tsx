import SkeletonTile from "@/components/dashboard/SkeletonTile";

/**
 * Dashboard loading skeleton.
 * Rendered by Next.js automatically while dashboard/page.tsx is loading.
 * Mirrors the bento grid layout using pulsing skeleton tiles.
 * No Framer Motion — purely CSS animate-pulse.
 */
export default function DashboardLoading() {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar skeleton */}
      <aside
        className="hidden sm:flex flex-col h-full border-r border-white/[0.06] bg-card w-[64px] md:w-56 shrink-0 py-6 px-2 md:px-3"
        aria-hidden="true"
      >
        {/* Logo mark */}
        <div className="w-8 h-8 rounded-xl bg-white/[0.06] animate-pulse mb-8 mx-auto md:ml-1" />

        {/* Nav skeletons */}
        <div className="flex flex-col gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-10 rounded-xl bg-white/[0.04] animate-pulse"
            />
          ))}
        </div>
      </aside>

      {/* Main content skeleton */}
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        {/* Page header */}
        <header className="mb-6 space-y-2" aria-hidden="true">
          <div className="h-5 w-24 rounded-lg bg-white/[0.06] animate-pulse" />
          <div className="h-4 w-44 rounded-lg bg-white/[0.04] animate-pulse" />
        </header>

        {/* Bento grid */}
        <section
          aria-label="Loading dashboard"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {/* Hero tile */}
          <SkeletonTile className="sm:col-span-2 lg:col-span-2 h-[180px]" />

          {/* Activity tile */}
          <SkeletonTile className="sm:col-span-2 lg:col-span-1 h-[180px]" />

          {/* Course card skeletons */}
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonTile key={i} className="h-[130px]" />
          ))}
        </section>
      </main>
    </div>
  );
}
