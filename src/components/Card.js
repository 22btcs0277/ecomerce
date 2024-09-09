import { BsFillBagFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { add } from "../redux/Cartslice";

const Card = ( {product}) => {

  const usedispatch = useDispatch()
  const handleAdd= (product)=>{
    usedispatch(add(product))
   }
  return (
    <>
      <section className="card">
        <img src={product.img} alt={product.title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{product.title}</h3>
          <section className="card-reviews">
            {product.star} {product.star} {product.star} {product.star}
            <span className="total-reviews">{product.reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{product.prevPrice}</del> {product.newPrice}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
            <button style={{width:"4rem",height:"2rem"}} onClick={()=>{handleAdd(product)}}> addCart</button>
        </div>
      </section>
    </>
  );
};
export default Card;