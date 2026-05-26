"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Reusable animated card wrapper.
 * - Uses motion.article for semantic correctness.
 * - Hover: scale via spring + box-shadow glow (no layout shifts).
 * - Animates only transform and box-shadow.
 */
export default function GlowCard({ children, className = "" }: GlowCardProps) {
  return (
    <motion.article
      className={`relative rounded-2xl border border-white/[0.06] bg-card overflow-hidden ${className}`}
      whileHover={{
        scale: 1.015,
        boxShadow:
          "0 0 0 1px rgba(124,58,237,0.3), 0 8px 32px rgba(124,58,237,0.1)",
      }}
      initial={{
        boxShadow: "0 0 0 1px rgba(255,255,255,0.06)",
      }}
      transition={{
        scale: { type: "spring", stiffness: 300, damping: 20 },
        boxShadow: { duration: 0.2, ease: "easeOut" },
      }}
      style={{ willChange: "transform" }}
    >
      {children}
    </motion.article>
  );
}
