import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cartslice"
// import cartReducer from "./Cartslice"


const store = configureStore({
    reducer:{
        cart:cartReducer,
    }
})
export default store;