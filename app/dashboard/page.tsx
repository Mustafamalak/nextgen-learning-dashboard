import DashboardClient from "@/components/dashboard/DashboardClient";
import type { Course } from "@/lib/types";

/**
 * Dashboard Server Component.
 *
 * Data source: placeholder courses only.
 * Later: replace with Supabase server client fetch.
 * This component never imports Framer Motion.
 */
const PLACEHOLDER_COURSES: Course[] = [
  {
    id: "1",
    title: "Quantum Computing Fundamentals",
    progress: 72,
    icon_name: "atom",
    created_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "2",
    title: "Neural Networks & Deep Learning",
    progress: 45,
    icon_name: "brain-circuit",
    created_at: "2024-01-05T00:00:00Z",
  },
  {
    id: "3",
    title: "Database Systems Design",
    progress: 88,
    icon_name: "database",
    created_at: "2024-01-10T00:00:00Z",
  },
  {
    id: "4",
    title: "AI & Machine Learning",
    progress: 30,
    icon_name: "sparkles",
    created_at: "2024-01-15T00:00:00Z",
  },
  {
    id: "5",
    title: "System Architecture & Layers",
    progress: 60,
    icon_name: "layers",
    created_at: "2024-01-20T00:00:00Z",
  },
  {
    id: "6",
    title: "Full-Stack Web Development",
    progress: 95,
    icon_name: "code2",
    created_at: "2024-01-25T00:00:00Z",
  },
];

export default function DashboardPage() {
  return <DashboardClient courses={PLACEHOLDER_COURSES} />;
}
