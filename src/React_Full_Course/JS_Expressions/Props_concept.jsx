import React from 'react'
import "./props_concept.css";

const Props_concept = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.image}alt="" />
        <h1> Wait {props.name}</h1>
        <p>And Watch {props.para}</p>
      </div>
    </div>
  )
}

export default Props_concept
