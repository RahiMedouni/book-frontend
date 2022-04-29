import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Welcome from "./Components/Welcome";
import Quiz from "./Components/bookQuiz/Quiz";
import AddQuiz from "./Components/bookQuiz/AddQuiz";
import Publish from "./Components/publishing/Publish";
import React from "react";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/publish/*" element={<Publish />} />
      </Routes>
    </div>
  );
}
export default App;
