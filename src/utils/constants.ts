import { BookOpen, GraduationCap, BarChart3, ShieldCheck, Globe } from "lucide-react";

export const UNIT_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  unit1: BookOpen,
  unit2: GraduationCap,
  unit3: BarChart3,
  unit4: ShieldCheck,
  unit5: Globe,
  unit6: BookOpen,
};

export const UNIT_COLORS: Record<string, string> = {
  unit1: "from-indigo-500 to-purple-600",
  unit2: "from-blue-500 to-cyan-500",
  unit3: "from-emerald-500 to-teal-600",
  unit4: "from-amber-500 to-orange-600",
  unit5: "from-rose-500 to-pink-600",
  unit6: "from-violet-500 to-fuchsia-600",
};

export const STATUS_COLORS: Record<string, string> = {
  completed: "bg-emerald-100 text-emerald-700 border-emerald-200",
  in_progress: "bg-amber-100 text-amber-700 border-amber-200",
  not_started: "bg-slate-100 text-slate-600 border-slate-200",
};
