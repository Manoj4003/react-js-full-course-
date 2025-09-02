import React from "react";
import "./App.css";

import Variable from "./React_Full_Course/Variable";
import Expression from "./React_Full_Course/JS_Expressions/Expression";
import FunctionParameters from "./React_Full_Course/JS_Expressions/FunctionParameters";
import FunctionRendering from "./React_Full_Course/JS_Expressions/Function_rendering";
function App() {   // 👈 name must match the one used in index.js
  return (
    <>
      <Variable/>
      <Expression/>
      <FunctionParameters/>
      <FunctionRendering/>
   
    
    </>
  );
}

export default App;   // 👈 makes it available for import
