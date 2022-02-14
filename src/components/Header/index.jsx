import "./style.css";
import { Logo } from "../Logo";
import { InputSearch } from "../InputSearch";
import { useState, useEffect } from "react";

export const Header = ({ showProducts }) => {
  const [words, setWords] = useState("");

  return (
    <div className="header-container">
      <Logo />
      <InputSearch funcFilter={() => showProducts(words)} />
    </div>
  );
};
