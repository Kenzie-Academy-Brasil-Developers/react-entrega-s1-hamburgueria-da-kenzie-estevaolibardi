import "./style.css";
import "./style2.css";
import "./style3.css";
import { Product } from "../Product";
import BurguerLog from "./imgs/burguer.png";
import { useState, useEffect } from "react";

export const Cart = ({ products, currentSale, handleClick, removeAll }) => {
  console.log(products);

  if (currentSale.length === 0) {
    return (
      <>
        <div className="container-cart">
          <div className="subcontainer-cart">
            <div className="header-cart">
              <div className="header-cart-title">
                <h3>Carrinho de Compras</h3>
              </div>
            </div>
            <h3 className="header-cart-subtitle">Sua sacola está vazia</h3>
            <p className="header-cart-p">Adicione Itens</p>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="container-cart">
          {/*  */}
          <div className="subcontainer-cart">
            <div className="header-cart">
              <div className="header-cart-title">
                <h3>Carrinho de Compras</h3>
              </div>
            </div>
            <div className="product-cart">
              {/*  */}
              {products.map((productCart, index) => {
                return (
                  <div className="mini-container" key={index}>
                    <div className="mini-container-product">
                      <img
                        className="miniproduct-logo"
                        src={productCart.img}
                        alt="Minha Figura"
                      ></img>
                    </div>
                    <div></div>
                    <div className="title-sub-divider">
                      <h2 className="mini-title">{productCart.name}</h2>
                      <h4 className="mini-sub-title">{productCart.category}</h4>
                    </div>
                    <button
                      onClick={() => {
                        return handleClick(index);
                      }}
                      className="remover-btn"
                    >
                      Remover
                    </button>
                  </div>
                );
              })}
            </div>
            <hr className="hr-style"></hr>
            <h4 className="quant">Quantidade: {currentSale.length}</h4>
            <div className="container-price">
              <span>Total</span>
              <p>
                R$
                {currentSale
                  .reduce((total, acc) => (total += acc.price), 0)
                  .toFixed(2)}
              </p>
            </div>
            <button onClick={() => removeAll()} className="btn-removeAll">
              Remover todos
            </button>

            {/*  */}
          </div>
        </div>
      </>
    );
  }
};
