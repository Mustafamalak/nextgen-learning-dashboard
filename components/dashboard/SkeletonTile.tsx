interface SkeletonTileProps {
  className?: string;
}

/**
 * A single pulsing skeleton placeholder tile.
 * Used in the dashboard loading state.
 */
export default function SkeletonTile({ className = "" }: SkeletonTileProps) {
  return (
    <div
      className={`rounded-2xl border border-white/[0.04] bg-card animate-pulse ${className}`}
      aria-hidden="true"
    />
  );
}
