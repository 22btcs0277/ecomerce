import React from 'react'

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Siderbar/Sidebar";
import Card from "./components/Card";
import "./index.css";
import { useState } from "react";
// import { useDispatch } from 'react-redux';

const Home=()=> {
  const [selectedCategory, setSelectedCategory] = useState(null);
  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // const filteredItems = products.filter(
  //   (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  // );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    // console.log("handlechange"+event.target.value)
  };
  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };


  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    // if (query) {
    //   filteredProducts = filteredItems;
    // }

    if (query) {
      filteredProducts = products.filter(
        // (product) => product.title.toLowerCase().includes(query.toLowerCase())
            (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );;
    }

    // Applying selected filter

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    // if (selected) {
    //   filteredProducts = filteredProducts.filter(
    //     (products) =>{
    //    console.log( products.company);
    // });
    // }
    return filteredProducts.map(
      // ({ img, title, star, reviews, prevPrice, newPrice ,filteredProducts}) => (
      //   <Card
      //     key={Math.random()}
      //     img={img}
      //     title={title}b
      //     star={star}
      //     reviews={reviews}
      //     prevPrice={prevPrice}
      //     newPrice={newPrice}
      //     product ={filteredProducts}
          
      //   />
      // )
      (product)=>{
        return (<Card product={product}/>)
      }
    );
  }
  const result = filteredData(products, selectedCategory, query);
  return (
    <div>
             <Sidebar handleChange={handleChange} />
             <Navigation query={query} handleInputChange={handleInputChange} />
             <Recommended handleClick={handleClick} />
             <Products result={result} />
            
    </div>
  )
}
export default Home;