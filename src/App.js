import {Route, Routes}from "react-router-dom";
import Home from "./Home";
import Login from "./authincation/login";
import Cart from "./authincation/Cart";
function App() {
 
    return (
      
      <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />} />
         </Routes>
       </>
     );
  

}

export default App;
