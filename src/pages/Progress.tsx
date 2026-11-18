import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Trophy, CheckCircle2, BarChart3, Clock, ArrowLeft } from "lucide-react";
import { LESSONS, getUnitById } from "../data/lessons";

export default function Progress() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");

  const lessonsWithStatus = LESSONS.map((lesson) => {
    const completed = localStorage.getItem(`completed-${lesson.id}`) === "true";
    const score = localStorage.getItem(`score-${lesson.id}`);
    const unit = getUnitById(lesson.unitId);
    return { lesson, completed, score: score ? Number(score) : 0, unit };
  });

  const filtered = lessonsWithStatus.filter((item) => {
    if (filter === "completed") return item.completed;
    if (filter === "pending") return !item.completed;
    return true;
  });

  const total = lessonsWithStatus.length;
  const completedCount = lessonsWithStatus.filter((i) => i.completed).length;
  const progress = total > 0 ? Math.round((completedCount / total) * 100) : 0;
  const avgScore =
    completedCount > 0
      ? Math.round(
          lessonsWithStatus
            .filter((i) => i.completed)
            .reduce((sum, i) => sum + i.score, 0) / completedCount
        )
      : 0;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
      <nav className="flex items-center gap-2 text-slate-500 text-sm">
        <Link to="/" className="hover:text-indigo-600">
          <ArrowLeft className="w-4 h-4 mr-1" /> Trang chủ
        </Link>
        <span className="mx-2 text-slate-300">/</span>
        <span className="text-slate-700 font-medium">Điểm số & tiến độ</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard
          label="Tiến độ tổng thể"
          value={`${progress}%`}
          icon={BarChart3}
          color="text-indigo-600 bg-indigo-50"
        />
        <StatCard
          label="Bài đã hoàn thành"
          value={`${completedCount} / ${total}`}
          icon={CheckCircle2}
          color="text-emerald-600 bg-emerald-50"
        />
        <StatCard
          label="Điểm trung bình"
          value={`${avgScore} điểm`}
          icon={Trophy}
          color="text-amber-600 bg-amber-50"
        />
        <StatCard
          label="Bài còn lại"
          value={`${total - completedCount}`}
          icon={Clock}
          color="text-slate-600 bg-slate-50"
        />
      </div>

      <div className="flex items-center gap-2 mb-4">
        {["all", "completed", "pending"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f as "all" | "completed" | "pending")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === f
                ? "bg-indigo-600 text-white"
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            {f === "all" ? "Tất cả" : f === "completed" ? "Đã hoàn thành" : "Chưa làm"}
          </button>
        ))}
      </div>

      <article className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase">Chương</th>
              <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase">Bài học</th>
              <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase">Trạng thái</th>
              <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase">Điểm</th>
              <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase text-right">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filtered.map(({ lesson, completed, score, unit }) => (
              <tr key={lesson.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{unit?.icon}</span>
                    <span className="text-sm font-medium text-slate-700">{unit?.title}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{lesson.icon}</span>
                    <span className="text-sm font-medium text-slate-700">{lesson.title}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-0.5 rounded text-xs font-medium ${
                    completed
                      ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                      : "bg-slate-100 text-slate-600 border border-slate-200"
                  }`}>
                    {completed ? "Hoàn thành" : "Chưa làm"}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {completed ? (
                    <span className="text-sm font-medium text-slate-700">{score} điểm</span>
                  ) : (
                    <span className="text-sm text-slate-400">-</span>
                  )}
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => navigate(`/bai-hoc/${lesson.id}`)}
                    className="text-sm text-indigo-600 hover:underline font-medium"
                  >
                    Xem lại
                  </button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-slate-400">
                  Không có bài học nào phù hợp.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </article>
    </div>
  );
}

function StatCard({
  label,
  value,
  icon: Icon,
  color,
}: {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}) {
  return (
    <div className={`rounded-xl p-5 border border-slate-200 bg-white ${color}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase">{label}</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">{value}</p>
        </div>
        <div className="w-8 h-8 rounded-lg bg-white/60 flex items-center justify-center">
          <Icon className="w-4 h-4 text-slate-400" />
        </div>
      </div>
    </div>
  );
}
