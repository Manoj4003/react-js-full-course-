import React from 'react'

function Greeting({isLoggedIn}){
   if(isLoggedIn){
    return(
        <h1>Welcome Back Manoj</h1>
    )
}
    else{
        return (
            <h1>Please Log in</h1>
        )
    }
   
}
export default Greeting;