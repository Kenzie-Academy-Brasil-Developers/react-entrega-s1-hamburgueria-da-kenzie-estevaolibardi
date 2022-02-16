import "./style.css";
import { Logo } from "../Logo";
import { InputSearch } from "../InputSearch";
import { useState, useEffect } from "react";

export const Header = ({ showProducts }) => {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header-container">
      <Logo />
      <div className="container-input">
        <div className="subcontainer-input">
          <input
            className="input-text"
            type="text"
            value={inputSearch}
            placeholder="Digitar Pesquisa"
            onChange={(e) => setInputSearch(e.target.value)}
          />
          <div>
            <button
              onClick={() => showProducts(inputSearch.toLocaleLowerCase())}
            >
              Pesquisar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
