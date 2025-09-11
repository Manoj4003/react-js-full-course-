// import React, { useState } from "react";

// const Usestate = () => {
//   const [UserName, setUserName] = useState("Ram");
//   const [userAge, setUserAge] = useState(20);

//   const UpdateName = () => {
//     setUserName("Sam");
//   };

//   const UpdateAge = () => {
//     setUserAge(25);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>User Details</h1>
//       <h3>{UserName}</h3>
//       <h2>{userAge}</h2>
//       <button onClick={UpdateName} style={{ marginRight: "10px" }}>
//         Update UserName
//       </button>
//       <button onClick={UpdateAge}>Update UserAge</button>
//     </div>
//   );
// };

// export default Usestate;
import React, { useState } from "react";

const Usestates = () => {
  const [userName, setUserName] = useState("Manoj");
  const [userAge, setUserAge] = useState(25);

  const updateUserName = () => setUserName("Kumar");
  const updateUserAge = () => setUserAge(26);

  return (
    <div>
      <h1>Update Student Details</h1>
      <h2>{userName}</h2>
      <h2>{userAge}</h2>
      <button onClick={updateUserName}>Update User Name</button>
      <button onClick={updateUserAge}>Update User Age</button>
    </div>
  );
};

export default Usestates;
