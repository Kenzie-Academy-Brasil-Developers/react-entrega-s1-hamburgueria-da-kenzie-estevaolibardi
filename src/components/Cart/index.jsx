import "./style.css";
import { CartProduct } from "../CartProduct";
import { Product } from "../Product";

export const Cart = (prop, currentSale) => {
  return (
    <div className="container-cart">
      <CartProduct pro={currentSale} />
    </div>
  );
};
