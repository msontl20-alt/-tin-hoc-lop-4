import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BookOpen, CheckCircle2, ArrowLeft, Play } from "lucide-react";
import type { Lesson } from "../data/lessons";
import { getLessonById, getUnitById } from "../data/lessons";

export default function Lesson() {
  const { id } = useParams();
  const navigate = useNavigate();
  const lesson = getLessonById(id as string);
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  if (!lesson) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-slate-800">Không tìm thấy bài học</h1>
        <Link to="/" className="mt-4 inline-block text-indigo-600 hover:underline">
          Quay về trang chủ
        </Link>
      </div>
    );
  }

  const unit = getUnitById(lesson.unitId);
  const savedCompleted = localStorage.getItem(`completed-${lesson.id}`);
  const savedScore = localStorage.getItem(`score-${lesson.id}`);
  if (savedCompleted) setCompleted(true);
  if (savedScore) setScore(Number(savedScore));

  const markComplete = (points: number) => {
    setCompleted(true);
    setScore(points);
    localStorage.setItem(`completed-${lesson.id}`, "true");
    localStorage.setItem(`score-${lesson.id}`, String(points));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      <nav className="flex items-center gap-2 text-slate-500 text-sm">
        <Link to="/" className="hover:text-indigo-600">
          <ArrowLeft className="w-4 h-4 mr-1" /> Trang chủ
        </Link>
        <span className="mx-2 text-slate-300">/</span>
        <span className="text-slate-700 font-medium">{lesson.title}</span>
      </nav>

      <article className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
        <div className="bg-indigo-50 border-b border-indigo-100 p-6">
          <div className="flex items-center justify-between mb-3">
            <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-100 text-indigo-700`}>
              {unit?.title}
            </span>
            {completed && (
              <span className="flex items-center gap-1 text-emerald-600 font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4" /> Đã hoàn thành
              </span>
            )}
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">{lesson.title}</h1>
          <p className="text-slate-600">{lesson.description}</p>
        </div>

        <div className="p-6">
          <div className="prose prose-indigo max-w-none text-slate-700">
            {lesson.content.map((paragraph, i) => (
              <p key={i} className="mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              to={`/bai-tap/${lesson.id}`}
              className="group flex items-center justify-center gap-2 bg-white border-2 border-dashed border-indigo-200 rounded-xl px-4 py-5 hover:border-indigo-400 hover:bg-indigo-50 transition-colors text-indigo-600 font-semibold"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" /> Bài tập
            </Link>
            <button
              onClick={() => navigate(`/kiem-tra/${lesson.id}`)}
              className="group flex items-center justify-center gap-2 bg-indigo-600 border-2 border-transparent rounded-xl px-4 py-5 hover:bg-indigo-700 transition-colors text-white font-semibold"
            >
              <BookOpen className="w-5 h-5" /> Kiểm tra nhanh
            </button>
          </div>

          {completed && (
            <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <div>
                <p className="text-sm font-medium text-emerald-800">Bài học đã hoàn thành!</p>
                {score !== null && (
                  <p className="text-xs text-emerald-600">Điểm số: {score}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </article>

      <div className="flex justify-end">
        <button
          onClick={() => markComplete(100)}
          disabled={completed}
          className="px-6 py-2.5 rounded-lg font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Đánh dấu hoàn thành
        </button>
      </div>
    </div>
  );
}
