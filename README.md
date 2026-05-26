# NextGen Learning Dashboard

A dark, futuristic learning dashboard built for the Frontend Intern Challenge.

## Tech Stack

| Layer       | Technology                    |
|-------------|-------------------------------|
| Framework   | Next.js 16 (App Router)       |
| Language    | TypeScript                    |
| Styling     | Tailwind CSS v4               |
| Animations  | Framer Motion v12             |
| Icons       | Lucide React                  |
| Database    | Supabase (coming next step)   |

## Architecture

```
app/
  dashboard/
    loading.tsx       # Skeleton bento grid (CSS pulse only)
    page.tsx          # Server Component — serves data as props
  globals.css         # Design tokens + Tailwind theme mapping
  layout.tsx          # Root layout with metadata + radial glow
  page.tsx            # Redirects / → /dashboard

components/
  dashboard/
    ActivityTile.tsx  # Heatmap grid (no chart library)
    BentoGrid.tsx     # Staggered entrance grid (Framer Motion)
    CourseCard.tsx    # Course with scaleX progress animation
    DashboardClient.tsx  # "use client" shell — no data fetching
    HeroTile.tsx      # Welcome + streak card
    Sidebar.tsx       # Responsive: left / icon-only / bottom nav
    SkeletonTile.tsx  # Reusable skeleton placeholder
  ui/
    GlowCard.tsx      # Reusable motion.article with hover glow

lib/
  icon-map.ts         # Lucide icon resolver with fallback
  supabase-server.ts  # Supabase server client (stub — next step)
  types.ts            # Course TypeScript interface
```

## Setup

```bash
# 1. Clone
git clone https://github.com/Mustafamalak/nextgen-learning-dashboard.git
cd nextgen-learning-dashboard

# 2. Install dependencies
npm install

# 3. Configure environment
cp .env.example .env.local
# Fill in NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY

# 4. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you will be redirected to `/dashboard`.

## Key Design Decisions

- **Server/Client boundary**: `app/dashboard/page.tsx` is a pure Server Component. Data is passed to `DashboardClient` via props. No Supabase fetching happens in client components.
- **Animation safety**: All animations use `opacity` and `transform` (scale, scaleX). Width, height, margin, and padding are never animated to avoid layout shifts.
- **Responsive sidebar**: Left sidebar (desktop) → icon-only (tablet) → bottom nav (mobile). Framer Motion `layoutId` provides the animated active indicator.
- **Progress bars**: Use `scaleX` MotionValue + `useSpring` triggered by `useInView` — no `width` animation.
