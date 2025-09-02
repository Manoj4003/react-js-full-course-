import React from 'react'

const FunctionParameters = () => {
    function greet(name)
    {
        return(
            <h4>{"Welcome "+name}</h4>
        )
    }
  return (
    <div>
      <h1>{greet("Manoj ")}</h1>
      <h1>{greet("Virat ")}</h1>
    </div>
  )
}

export default FunctionParameters
