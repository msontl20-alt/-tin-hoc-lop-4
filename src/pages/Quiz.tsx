import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { CheckCircle2, ArrowLeft, BookOpen, Trophy } from "lucide-react";
import { getLessonById } from "../data/lessons";

export default function Quiz() {
  const { id } = useParams();
  const navigate = useNavigate();
  const lesson = getLessonById(id as string);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});

  if (!lesson || lesson.quiz.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-slate-800">Không có câu hỏi kiểm tra nào</h1>
        <Link to={`/bai-hoc/${id}`} className="mt-4 inline-block text-indigo-600 hover:underline">
          Quay lại bài học
        </Link>
      </div>
    );
  }

  const question = lesson.quiz[currentIndex];
  const total = lesson.quiz.length;

  const handleAnswer = (optionIndex: number) => {
    setUserAnswers((prev) => ({ ...prev, [question.id]: optionIndex }));
    setSubmitted(true);
    setShowAnswer(true);
    if (optionIndex === question.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSubmitted(false);
      setShowAnswer(false);
    } else {
      const percentage = Math.round((score / total) * 100);
      localStorage.setItem(`score-quiz-${id}`, String(percentage));
      navigate(`/ket-qua/${id}?type=quiz&score=${score}&total=${total}`);
    }
  };

  const selected = userAnswers[question.id];
  const isSelected = (index: number) => selected === index;
  const isCorrect = (index: number) => index === question.correctAnswer;

  const renderOptions = () =>
    question.options.map((option, index) => {
      const sel = isSelected(index);
      const cor = isCorrect(index);
      let cls = "w-full text-left p-4 rounded-lg border transition-colors text-sm font-medium ";
      if (submitted) {
        if (sel && cor) cls += "bg-emerald-50 border-emerald-200 text-emerald-700";
        else if (sel) cls += "bg-rose-50 border-rose-200 text-rose-700";
        else cls += "bg-slate-50 border-slate-200 text-slate-600";
      } else {
        cls += "bg-white border-slate-200 text-slate-700 hover:bg-indigo-50 hover:border-indigo-200";
      }
      return (
        <button
          key={index}
          onClick={() => handleAnswer(index)}
          disabled={submitted}
          className={cls}
        >
          {String.fromCharCode(65 + index)}. {option}
        </button>
      );
    });

  const answerText = showAnswer && submitted ? (
    <div className="mt-4 p-3 rounded-lg border flex items-center gap-2">
      {selected === question.correctAnswer ? (
        <>
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span className="text-sm text-emerald-700 font-medium">Đúng rồi!</span>
        </>
      ) : (
        <>
          <span className="w-4 h-4 text-rose-600">✕</span>
          <span className="text-sm text-rose-700 font-medium">
            Sai rồi. Đáp án đúng: {question.options[question.correctAnswer]}
          </span>
        </>
      )}
      <p className="mt-1 text-xs text-slate-600">{question.explanation}</p>
    </div>
  ) : null;

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
      <nav className="flex items-center gap-2 text-slate-500 text-sm">
        <Link to={`/bai-hoc/${id}`} className="hover:text-indigo-600">
          <ArrowLeft className="w-4 h-4 mr-1" /> Quay lại bài học
        </Link>
        <span className="mx-2 text-slate-300">/</span>
        <span className="text-slate-700 font-medium">Kiểm tra nhanh</span>
      </nav>

      <article className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-100">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              Câu hỏi {currentIndex + 1} / {total}
            </span>
            <span className="text-sm font-medium text-slate-700">Điểm: {score} / {total}</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900">{question.question}</h2>
        </div>

        <div className="p-6">{renderOptions()}{answerText}</div>

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
            <BookOpen className="w-4 h-4 ml-1" />
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
        <Trophy className="w-3 h-3" /> Làm lại kiểm tra
      </button>
    </div>
  );
}
