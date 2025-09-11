import React from "react";
import "./App.css";
import html from "./Assets/team-1.jpg";
import css from "./Assets/team-2.jpg";
import js from "./Assets/team-3.jpg";

import Variable from "./React_Full_Course/Variable";

import FunctionParameters from "./React_Full_Course/JS_Expressions/FunctionParameters";
import FunctionRendering from "./React_Full_Course/JS_Expressions/Function_rendering";
import Props_concept from "./React_Full_Course/JS_Expressions/Props_concept";
import Greeting from "./React_Full_Course/Conditional_Rendering/Conditional_rendering";
import Usestate from "./React_Full_Course/Usestate/usestate";
import Usestates from "./React_Full_Course/Usestate/usestate";


function App() {
  // 👈 name must match the one used in index.js
  return (
    <>
      <Variable />

      <FunctionParameters />
      <FunctionRendering />
      <Greeting/>
      <Usestate/>
      <Usestates/>
      {/* <Props_concept image={html} name="HTML" para="Html full course" /> */}
      
    </>
  );
}

export default App; // 👈 makes it available for import
