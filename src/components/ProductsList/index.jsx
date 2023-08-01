import "./style.css";
import { Product } from "../Product";
import { Cart } from "../Cart";

export const ProductsList = ({ products, addtoCart, handleClick }) => {
  return (
    <div className="container-productslist">
      <div className="container-productss">
        {products.map((element, index) => (
          <Product
            key={index}
            props={element}
            addToCart={addtoCart}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};
