import React, { useState } from 'react'

 const  Custum=()=> {

    const[login,setLogin]=useState(true)
   console.log(login)
    const handleLogin =(e)=>{
        e.preventDefault();
         if(!login){
            setLogin(true);
         }
         else{
            setLogin(false);
         }
    }
  return (
    [login,setLogin,handleLogin]
  )
  
}

export default Custum