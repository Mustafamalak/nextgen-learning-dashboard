import {
  Atom,
  BrainCircuit,
  Database,
  Sparkles,
  BookOpen,
  Code2,
  GraduationCap,
  Layers,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  atom: Atom,
  "brain-circuit": BrainCircuit,
  braincircuit: BrainCircuit,
  database: Database,
  sparkles: Sparkles,
  "book-open": BookOpen,
  bookopen: BookOpen,
  code2: Code2,
  "graduation-cap": GraduationCap,
  graduationcap: GraduationCap,
  layers: Layers,
};

export function getCourseIcon(iconName: string): LucideIcon {
  const key = iconName.toLowerCase();
  return iconMap[key] ?? BookOpen;
}
