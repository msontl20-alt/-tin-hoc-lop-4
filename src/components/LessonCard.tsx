import { Link } from "react-router-dom";
import { Play, CheckCircle2, Clock } from "lucide-react";
import type { Lesson } from "../data/lessons";
import { UNIT_COLORS } from "../utils/constants";

interface LessonCardProps {
  lesson: Lesson;
  completed: boolean;
  score?: number;
}

export default function LessonCard({ lesson, completed, score }: LessonCardProps) {
  const colorClass = UNIT_COLORS[lesson.unitId] || "from-indigo-500 to-purple-600";
  const statusColor = completed
    ? "bg-emerald-100 text-emerald-700 border-emerald-200"
    : "bg-slate-100 text-slate-600 border-slate-200";

  return (
    <article
      className="group relative rounded-xl border p-5 hover:border-indigo-200 hover:shadow-md transition-all cursor-pointer"
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${colorClass}`}
          >
            {lesson.icon}
          </div>
          <span className={`text-xs font-semibold uppercase tracking-wider ${statusColor} border px-2 py-0.5 rounded`}>
            {completed ? "Hoàn thành" : "Chưa làm"}
          </span>
        </div>
        <h3 className="font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
          {lesson.title}
        </h3>
        <p className="text-sm text-slate-600 line-clamp-2">{lesson.description}</p>
        {score !== undefined && (
          <div className="mt-2 flex items-center gap-1 text-sm text-emerald-600 font-medium">
            <CheckCircle2 className="w-4 h-4" /> {score} điểm
          </div>
        )}
        <div className="mt-auto flex items-center justify-between">
          <Link
            to={`/bai-hoc/${lesson.id}`}
            className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700"
          >
            <Play className="w-3 h-3" /> Bắt đầu
          </Link>
          {!completed && (
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3 h-3" /> 10 phút
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
