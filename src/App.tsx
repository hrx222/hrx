import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import CourseDetail from "@/pages/CourseDetail";
import LearningPage from "@/pages/LearningPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/learning" element={<LearningPage />} />
      </Routes>
    </Router>
  );
}
