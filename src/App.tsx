import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Lesson from "./pages/Lesson";
import Exercise from "./pages/Exercise";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Progress from "./pages/Progress";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bai-hoc" element={<Home />} />
          <Route path="/bai-hoc/:id" element={<Lesson />} />
          <Route path="/bai-tap/:id" element={<Exercise />} />
          <Route path="/bai-tap" element={<Home />} />
          <Route path="/kiem-tra/:id" element={<Quiz />} />
          <Route path="/ket-qua/:id" element={<Result />} />
          <Route path="/diem" element={<Progress />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
