import "./style.css";
import { Product } from "../Product";
import { Cart } from "../Cart";

export const ProductsList = ({
  products,
  addToCart,
  currentSale,
  setCurrentSale,
  handleClick,
  prop,
}) => {
  return (
    <div className="container-productslist">
      <div className="container-productss">
        {prop.map((element, index) => (
          <Product
            key={index}
            products={element}
            addToCart={addToCart}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};
