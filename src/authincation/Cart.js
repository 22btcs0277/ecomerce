import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { remove } from '../redux/Cartslice';
import "./Cart.css"

const Cart = () => {
    const dispatch =useDispatch();
    const cartitems = useSelector((state)=>state.cart)
    const handleremove =(id)=>{
        
        dispatch(remove(id))
    }
    if(cartitems==0){
        return <div>
            <h3>Cart Page</h3>
            <h1>No Products exist</h1>
        </div>
    }
    else{

        return (
          <div>
              <h3>Cart Page</h3>
        {console.log(cartitems)} 
        
          <div className='cartWrapper'>
              {cartitems.map((item)=>(
                  <div className='cartCard'>
                  <img src={item.img} alt="img"/>
                  <h5>{item.title}</h5>
                  <h5>{item.price}</h5>
                  <button className='btn' onClick={()=>handleremove(item.id)}>Remove</button>
                   <hr/>
                  </div>
              ))}
          </div>
          </div>
        )
    }
}

export default Cart;