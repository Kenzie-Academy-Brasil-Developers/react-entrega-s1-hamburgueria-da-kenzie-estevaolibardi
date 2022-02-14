import "./style.css";
import "./reset.css";
import BurguerLogo from "./img/logo.png";

export const Logo = () => {
  return (
    <figure className="container-logo">
      <img className="logo-style" src={BurguerLogo} alt="Minha Figura"></img>
    </figure>
  );
};
