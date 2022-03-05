import { Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import Home from "./Home";
import Welcome from "./Components/Welcome";
import React, { useState } from "react";
import SignUpTranslator from "./Components/SignupTranslator";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signuptranslator" element={<SignUpTranslator />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}
export default App;
