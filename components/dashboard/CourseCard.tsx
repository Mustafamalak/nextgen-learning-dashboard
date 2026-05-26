"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import GlowCard from "@/components/ui/GlowCard";
import { getCourseIcon } from "@/lib/icon-map";
import type { Course } from "@/lib/types";

interface CourseCardProps {
  course: Course;
}

/**
 * CourseCard — renders a single course with:
 * - Lucide icon resolved dynamically from icon-map
 * - Progress bar animated via scaleX (no width animation — no layout shifts)
 * - Spring-eased progress entrance triggered on scroll into view
 */
export default function CourseCard({ course }: CourseCardProps) {
  const Icon = getCourseIcon(course.icon_name);

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });

  // MotionValue drives the scaleX of the progress bar
  const progressMV = useMotionValue(0);
  const springProgress = useSpring(progressMV, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (isInView) {
      progressMV.set(course.progress / 100);
    }
  }, [isInView, course.progress, progressMV]);

  return (
    <GlowCard>
      <div ref={ref} className="p-5 flex flex-col gap-4 h-full">
        {/* Icon + title */}
        <header className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-violet-600/10 border border-violet-500/15 flex items-center justify-center shrink-0 mt-0.5">
            <Icon size={17} className="text-violet-400" />
          </div>
          <h3 className="text-sm font-semibold text-foreground leading-snug line-clamp-2">
            {course.title}
          </h3>
        </header>

        {/* Progress */}
        <footer className="flex flex-col gap-2 mt-auto">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Progress</span>
            <span className="text-xs font-semibold text-violet-400">
              {course.progress}%
            </span>
          </div>

          {/* Track: overflow-hidden clips the scaled bar; no layout shift */}
          <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-violet-600 to-indigo-400 origin-left"
              style={{ scaleX: springProgress }}
            />
          </div>
        </footer>
      </div>
    </GlowCard>
  );
}
