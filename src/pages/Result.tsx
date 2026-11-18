import { useSearchParams, Link } from "react-router-dom";
import { Trophy, ArrowLeft } from "lucide-react";

export default function Result() {
  const [searchParams] = useSearchParams();
  const lessonId = searchParams.get("lessonId") || "";
  const score = Number(searchParams.get("score")) || 0;
  const total = Number(searchParams.get("total")) || 0;
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  const getMessage = () => {
    if (percentage >= 90) return "Xuất sắc! Bạn đã nắm vững bài học này.";
    if (percentage >= 70) return "Tốt! Bạn hiểu rõ phần lớn nội dung.";
    if (percentage >= 50) return "Khá! Hãy ôn lại một số phần chưa rõ.";
    return "Hãy học lại bài này và làm thêm bài tập nhé.";
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-12 text-center space-y-8">
      <nav className="flex justify-center">
        <Link
          to={`/bai-hoc/${lessonId}`}
          className="flex items-center gap-2 text-slate-500 text-sm hover:text-indigo-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Quay lại bài học
        </Link>
      </nav>

      <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex justify-center mb-6">
          <div
            className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-700 ${
              percentage >= 70
                ? "bg-emerald-100 text-emerald-600 border border-emerald-200"
                : "bg-amber-100 text-amber-600 border border-amber-200"
            }`}
          >
            <Trophy className="w-10 h-10" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-slate-900 mb-2">Kết quả</h1>
        <div className="text-4xl font-bold text-indigo-600 mb-1">
          {score} / {total}
        </div>
        <div className="text-xl text-slate-600 mb-6">{percentage}%</div>

        <div className="w-full bg-slate-200 rounded-full h-4 mb-6 overflow-hidden">
          <div
            className="h-full transition-all duration-1000 ease-out"
            style={{ width: `${percentage}%`, background: percentage >= 70 ? "#10b981" : "#f59e0b" }}
          />
        </div>

        <p className="text-lg font-medium text-slate-700 mb-2">{getMessage()}</p>

        <div className="flex gap-3 justify-center">
          <button
            className="px-6 py-2.5 rounded-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            Hoàn thành
          </button>
          <Link
            to="/bai-tap"
            className="px-6 py-2.5 rounded-lg font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
          >
            Làm bài tập khác
          </Link>
        </div>
      </article>
    </div>
  );
}
