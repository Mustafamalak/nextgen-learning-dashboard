"use client";

import { motion, type Variants } from "framer-motion";
import type { Course } from "@/lib/types";
import HeroTile from "./HeroTile";
import CourseCard from "./CourseCard";
import ActivityTile from "./ActivityTile";

/** Parent variants control stagger timing for all child tiles */
const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 24,
    },
  },
};

interface BentoGridProps {
  courses: Course[];
}

/**
 * BentoGrid — the main content area.
 * - Framer Motion parent/child stagger entrance on mount.
 * - Responsive CSS Grid: 1 → 2 → 3 columns.
 * - Semantic: <main> wraps the whole content, <section> wraps the tile grid.
 * - Animations use opacity + transform only.
 */
export default function BentoGrid({ courses }: BentoGridProps) {
  return (
    <main className="flex-1 overflow-y-auto p-4 pb-24 md:p-6 sm:pb-6">
      <header className="mb-6">
        <h1 className="text-lg font-semibold tracking-tight text-foreground/80">
          Dashboard
        </h1>
        <p className="mt-0.5 text-sm text-muted-foreground">
          Your learning command center
        </p>
      </header>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        aria-label="Dashboard overview"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        <motion.div
          variants={itemVariants}
          className="sm:col-span-2 lg:col-span-2"
        >
          <HeroTile />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="sm:col-span-2 lg:col-span-1"
        >
          <ActivityTile />
        </motion.div>

        {courses.map((course) => (
          <motion.div key={course.id} variants={itemVariants}>
            <CourseCard course={course} />
          </motion.div>
        ))}
      </motion.section>
    </main>
  );
}