import React from "react";
import "./App.css";
import html from "./Assets/team-1.jpg";
import css from "./Assets/team-2.jpg";
import js from "./Assets/team-3.jpg";

import Variable from "./React_Full_Course/Variable";

import FunctionParameters from "./React_Full_Course/JS_Expressions/FunctionParameters";
import FunctionRendering from "./React_Full_Course/JS_Expressions/Function_rendering";
import Props_concept from "./React_Full_Course/JS_Expressions/Props_concept";

function App() {
  // 👈 name must match the one used in index.js
  return (
    <>
      <Variable />

      <FunctionParameters />
      <FunctionRendering />
      <Props_concept image={html} name="HTML" para="Html full course" />

    </>
  );
}

export default App; // 👈 makes it available for import
