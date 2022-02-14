import "./style.css";
import { MiniProductCart } from "../MiniProductCart";

export const CartProduct = (prop, currentSale) => {
  return (
    <div className="subcontainer-cart">
      <div className="header-cart">
        <div className="header-cart-title">
          <h3>Carrinho de Compras</h3>
        </div>
      </div>
      <div className="product-cart">
        <MiniProductCart pro={currentSale} />
      </div>
      <h3 className="header-cart-subtitle">Sua sacola está vazia</h3>
      <p className="header-cart-p">Adicione Itens</p>
    </div>
  );
};
