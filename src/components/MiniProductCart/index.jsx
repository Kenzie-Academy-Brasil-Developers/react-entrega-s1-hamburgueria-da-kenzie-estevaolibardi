import BurguerLog from "./img/burguer.png";
import "./style.css";

export const MiniProductCart = (prop) => {
  {
    // prop.map((prodCart, index) => {
    return (
      <>
        <div className="mini-container">
          <div className="mini-container-product">
            <img
              className="miniproduct-logo"
              src={BurguerLog}
              alt="Minha Figura"
            ></img>
          </div>
          <div></div>
          <div className="title-sub-divider">
            <h2 className="mini-title">Hamburguers</h2>
            <h4 className="mini-sub-title">Sanduíches</h4>
          </div>
          <p className="mini-sub-title2">Remover</p>
        </div>
        <div className="container-price">
          <p>Total</p>
          <p>R$40,00</p>
        </div>
      </>
    );
    // });
  }
};
