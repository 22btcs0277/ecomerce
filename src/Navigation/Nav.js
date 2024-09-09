 import "./Nav.css"
  
 import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
 import {AiOutlineShoppingCart,AiOutlineUserAdd} from "react-icons/ai"
import Login from "../authincation/login";

 const  Nav=({query,handleInputChange})=> {
  const handleCArt=()=>{

  }
  return (
    <nav>
        <div>
            <input 
            type='text' 
            placeholder="Enter your search shoe."
            onChange={handleInputChange}
            value={query}
            />

            </div>
            <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        
       <Link  to="cart" onClick={handleCArt}><AiOutlineShoppingCart className="nav-icons" /></Link>
         
          <Link to="login"><AiOutlineUserAdd className="nav-icons" /></Link>
      
      </div>
    </nav>
   
  )
}

export default Nav;