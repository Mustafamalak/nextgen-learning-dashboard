"use client";

import type { Course } from "@/lib/types";
import Sidebar from "./Sidebar";
import BentoGrid from "./BentoGrid";

interface DashboardClientProps {
  courses: Course[];
}

/**
 * DashboardClient — the interactive shell of the dashboard.
 * - Marked "use client" so child components can use Framer Motion and hooks.
 * - Receives data exclusively via props (no fetching here).
 * - Composes Sidebar (left) and BentoGrid (main content area).
 */
export default function DashboardClient({ courses }: DashboardClientProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />
      <BentoGrid courses={courses} />
    </div>
  );
}
