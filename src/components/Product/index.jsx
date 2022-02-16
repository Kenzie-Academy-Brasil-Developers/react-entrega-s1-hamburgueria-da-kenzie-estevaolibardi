import "./style.css";
import BurguerLog from "./img/burguer.png";
import { Button } from "../Buttons";

export const Product = ({ products, addToCart }) => {
  return (
    <div className="container-product">
      <div className="sub-container-product">
        <img
          className="product-logo"
          src={products.img}
          alt="Minha Figura"
        ></img>
      </div>
      <h2>{products.name}</h2>
      <h4>{products.category}</h4>

      <p>
        <span>R$</span>
        {products.price.toFixed(2)}
      </p>
      <Button addToCart={() => addToCart(products)} />
    </div>
  );
};
