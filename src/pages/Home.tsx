import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, Play, Trophy } from "lucide-react";
import { UNITS, LESSONS } from "../data/lessons";
import { getLessonsByUnit } from "../data/lessons";
import LessonCard from "../components/LessonCard";
import { UNIT_COLORS } from "../utils/constants";

export default function Home() {
  const navigate = useNavigate();
  const progress = 0;

  return (
    <div className="space-y-8">
      <header className="px-4 py-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl text-white overflow-hidden relative">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="w-5 h-5 text-amber-200" />
            <span className="text-sm font-medium opacity-80">Kiến thức của bạn</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Chào mừng bạn đến với</h1>
          <h2 className="text-2xl font-semibold">Tin học lớp 4</h2>
          <p className="mt-3 text-indigo-100 max-w-xl">
            Học tập theo sách giáo khoa Kết nối tri thức - bài học, bài tập và kiểm tra traimensh.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex-1 bg-white/20 rounded-lg p-4 border border-white/30">
              <div className="text-xs text-indigo-200 uppercase tracking-wider mb-1">Tiến độ</div>
              <div className="w-full bg-indigo-600/30 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-indigo-300 h-full rounded-full transition-all duration-700"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="text-sm font-medium mt-1">{progress}% hoàn thành</div>
            </div>
            <button
              onClick={() => navigate("/bai-hoc")}
              className="bg-white text-indigo-600 px-6 py-2.5 rounded-lg font-semibold hover:bg-indigo-50 transition-colors flex items-center gap-2"
            >
              <ArrowRight className="w-4 h-4" /> Bắt đầu học
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Các chương bài học
        </h2>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {UNITS.map((unit) => {
            const unitLessons = getLessonsByUnit(unit.id);
            const unitCompleted = unitLessons.filter((l) => {
              const key = `completed-${l.id}`;
              return localStorage.getItem(key) === "true";
            }).length;
            const colorClass = UNIT_COLORS[unit.id] || "from-indigo-500 to-purple-600";
            const unitProgress =
              unitLessons.length > 0 ? Math.round((unitCompleted / unitLessons.length) * 100) : 0;

            return (
              <article
                key={unit.id}
                className="rounded-xl border border-slate-200 bg-white p-5 hover:shadow-lg hover:border-indigo-200 transition-all group cursor-pointer"
                onClick={() => navigate(`/bai-hoc?unit=${unit.id}`)}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${colorClass}`}
                  >
                    {unit.icon}
                  </div>
                  <span className="text-xs font-bold text-slate-400 group-hover:text-indigo-600 transition-colors">
                    {unitProgress}%
                  </span>
                </div>
                <h3 className="font-semibold text-slate-800 mb-1 group-hover:text-indigo-600 transition-colors">
                  {unit.title}
                </h3>
                <p className="text-xs text-slate-500 mb-4 line-clamp-2">{unit.description}</p>
                <div className="mt-auto pt-3 border-t border-slate-100">
                  <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden mb-2">
                    <div
                      className="bg-indigo-500 h-full rounded-full transition-all duration-700"
                      style={{ width: `${unitProgress}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>{unitCompleted}/{unitLessons.length} bài</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <h2 className="mt-12 text-xl font-bold text-slate-800 flex items-center gap-2">
          <Play className="w-5 h-5 text-indigo-500" /> Tất cả bài học
        </h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {LESSONS.map((lesson) => {
            const completed = localStorage.getItem(`completed-${lesson.id}`) === "true";
            const score = localStorage.getItem(`score-${lesson.id}`);
            return (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                completed={completed}
                score={score ? Number(score) : undefined}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
