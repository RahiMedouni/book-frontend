import { Routes, Route } from "react-router-dom";
import Signup from "./Components/signings/Signup";
import Signin from "./Components/signings/Signin";
import SignUpAdmin from "./Components/signings/SignUpAdmin";
import SigninAdmin from "./Components/signings/SigninAdmin";
import Home from "./Home";
import Welcome from "./Components/Welcome";
import Quiz from "./Components/bookQuiz/Quiz";
import React from "react";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signupadmin" element={<SignUpAdmin />} />
        <Route path="/signinadmin" element={<SigninAdmin />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}
export default App;
