import { useState } from "react"
import "./login.css"
import Custum from "../Products/Custumhook/Custum"
 const  Login=()=> {

   const[login,setLogin,handleLogin]=Custum()
    

   const [value,setValue]=useState({
    name: '',
    email: '',
    number: ''
   })
    const handleChange=(e)=>{
       
        setValue({...value,[e.target.name]:e.target.value } )
        
    }

  return (
     <form className="form"> 
     <h1>Login page</h1>
         <label> 
            <input type='text'name="name" placeholder="Enter your name" onChange={handleChange}/>
            
         </label>
         <label> 
            <input type='text' name="email"placeholder="Enter Email"onChange={handleChange}/>
         </label>
         <label> 
            <input type='text'name="number" placeholder="Mobile number"onChange={handleChange}/>
         </label>
         <button type="submit" onClick={ handleLogin}> Login</button>
         <button> SingUP</button>

     </form>
  )
}

export default Login;