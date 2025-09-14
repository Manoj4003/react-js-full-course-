import React, { useState } from 'react';
import './Usestate/UseState.css';


const UseState = () => {
    const [UserName,setUserName]=useState("Manoj");
    const [UserAge,setUserAge]=useState(24);
    function changename()
    {
      UserName==="Manoj"? setUserName("Kumar"):setUserName("Manoj");
    }
    function changeAge()


    {
        UserAge===25?setUserAge(24):setUserAge(25);
    }
  return (
    <div>
      <h1>User Details</h1>
      <h1>{UserName}</h1>
      <h3>{UserAge}</h3>
      <button onClick={changename}>Update Name</button>
        <button onClick={changeAge}>Change Age</button>
    </div>
  )
}

export default UseState
