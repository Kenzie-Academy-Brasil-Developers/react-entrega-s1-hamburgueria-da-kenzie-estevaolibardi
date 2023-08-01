import "./style.css";
import BurguerLog from "./img/burguer.png";
import { Button } from "../Buttons";

export const Product = ({ props, addToCart }) => {
  return (
    <div className="container-product">
      <div className="sub-container-product">
        <img className="product-logo" src={props.img} alt="Minha Figura"></img>
      </div>
      <h2>{props.name}</h2>
      <h4>{props.category}</h4>

      <p>
        <span>R$</span>
        {props.price.toFixed(2)}
      </p>
      <Button addToCart={() => addToCart(props)} />
    </div>
  );
};
