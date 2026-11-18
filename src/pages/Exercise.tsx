import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { CheckCircle2, ArrowLeft, Play, RefreshCw } from "lucide-react";
import { getLessonById } from "../data/lessons";
import type { Exercise } from "../data/lessons";

export default function Exercise() {
  const { id } = useParams();
  const navigate = useNavigate();
  const lesson = getLessonById(id as string);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string | string[]>>({});

  if (!lesson || lesson.exercises.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-slate-800">Không có bài tập nào</h1>
        <Link to={`/bai-hoc/${id}`} className="mt-4 inline-block text-indigo-600 hover:underline">
          Quay lại bài học
        </Link>
      </div>
    );
  }

  const exercise = lesson.exercises[currentIndex];
  const total = lesson.exercises.length;

  const isCorrect = (ans: string | string[]) => {
    if (Array.isArray(ans) && Array.isArray(exercise.answer)) {
      return ans.sort().join(",") === exercise.answer.sort().join(",");
    }
    return ans === exercise.answer;
  };

  const handleAnswer = (answer: string | string[]) => {
    setUserAnswers((prev) => ({ ...prev, [exercise.id]: answer }));
    setSubmitted(true);
    setShowAnswer(true);
    if (isCorrect(answer)) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSubmitted(false);
      setShowAnswer(false);
    } else {
      const maxScore = total;
      const percentage = Math.round((score / maxScore) * 100);
      localStorage.setItem(`score-ex-${id}`, String(percentage));
      navigate(`/ket-qua/${id}?type=exercise&score=${score}&total=${maxScore}`);
    }
  };

  const selected = userAnswers[exercise.id];
  const isSelected = (opt: string) => (Array.isArray(selected) ? selected.includes(opt) : selected === opt);
  const isRight = (opt: string) => {
    if (Array.isArray(exercise.answer)) return exercise.answer.includes(opt);
    return exercise.answer === opt;
  };

  const renderOptions = () => {
    if (!exercise.options) return null;
    return exercise.options.map((opt, i) => {
      const selectedNow = isSelected(opt);
      const correctNow = isRight(opt);
      let cls = "w-full text-left p-3 rounded-lg border transition-colors text-sm font-medium ";
      if (submitted) {
        if (selectedNow && correctNow) cls += "bg-emerald-50 border-emerald-200 text-emerald-700";
        else if (selectedNow) cls += "bg-rose-50 border-rose-200 text-rose-700";
        else cls += "bg-slate-50 border-slate-200 text-slate-600";
      } else {
        cls += "bg-white border-slate-200 text-slate-700 hover:bg-indigo-50 hover:border-indigo-200";
      }
      return (
        <button
          key={i}
          onClick={() => handleAnswer(opt)}
          disabled={submitted}
          className={cls}
        >
          {opt}
        </button>
      );
    });
  };

  const answerText = showAnswer && submitted ? (
    <div className="mt-4 p-3 rounded-lg border flex items-center gap-2">
      {isCorrect(selected as string | string[]) ? (
        <>
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span className="text-sm text-emerald-700 font-medium">Đúng rồi!</span>
        </>
      ) : (
        <>
          <span className="w-4 h-4 text-rose-600">✕</span>
          <span className="text-sm text-rose-700 font-medium">
            Sai rồi. Đáp án: {String(exercise.answer)}
          </span>
        </>
      )}
    </div>
  ) : null;

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
      <nav className="flex items-center gap-2 text-slate-500 text-sm">
        <Link to={`/bai-hoc/${id}`} className="hover:text-indigo-600">
          <ArrowLeft className="w-4 h-4 mr-1" /> Quay lại bài học
        </Link>
        <span className="mx-2 text-slate-300">/</span>
        <span className="text-slate-700 font-medium">Bài tập</span>
      </nav>

      <article className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-100">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              Bài tập {currentIndex + 1} / {total}
            </span>
            <span className="text-sm font-medium text-slate-700">Điểm: {score} / {total}</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900">{exercise.title}</h2>
          <p className="mt-2 text-slate-600">{exercise.content}</p>
        </div>

        <div className="p-6">
          {exercise.type === "click" || exercise.type === "matching" ? renderOptions() : (
            <div className="space-y-2">
              <input
                value={userAnswers[exercise.id] ?? ""}
                onChange={(e) => {
                  setUserAnswers((prev) => ({ ...prev, [exercise.id]: e.target.value }));
                  setSubmitted(false);
                  setShowAnswer(false);
                }}
                disabled={submitted}
                className="w-full p-3 rounded-lg border border-slate-200 text-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                placeholder="Nhập câu trả lời..."
              />
              <button
                onClick={() => handleAnswer(userAnswers[exercise.id] ?? "")}
                disabled={submitted || !String(userAnswers[exercise.id]).trim()}
                className="w-full py-2 rounded-lg bg-indigo-600 text-white font-semibold disabled:opacity-50 hover:bg-indigo-700 transition-colors"
              >
                Nộp câu trả lời
              </button>
            </div>
          )}
          {answerText}
        </div>

        <div className="p-6 border-t border-slate-100 flex justify-between items-center">
          {currentIndex > 0 && (
            <button
              onClick={() => {
                setCurrentIndex((prev) => prev - 1);
                setSubmitted(false);
                setShowAnswer(false);
              }}
              className="px-4 py-2 rounded-lg text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition-colors text-sm font-medium"
            >
              Trước
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={submitted && !showAnswer}
            className="px-6 py-2.5 rounded-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
          >
            {currentIndex === total - 1 ? "Xem kết quả" : "Câu tiếp theo"}
            <Play className="w-4 h-4 ml-1" />
          </button>
        </div>
      </article>

      <button
        onClick={() => {
          setCurrentIndex(0);
          setSubmitted(false);
          setShowAnswer(false);
          setScore(0);
          setUserAnswers({});
        }}
        className="text-xs text-indigo-600 hover:underline flex items-center gap-1"
      >
        <RefreshCw className="w-3 h-3" /> Làm lại từ đầu
      </button>
    </div>
  );
}
