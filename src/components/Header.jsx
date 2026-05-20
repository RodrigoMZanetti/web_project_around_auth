import logo from "../images/logo.svg";
import "../../blocks/header.css";

function Header({ handleLogout }) {
  const email = localStorage.getItem("email");
  return (
    <header className="header page__section">
      <img
        alt="Logotipo Around The U.S."
        className="logo header__logo"
        src={logo}
      />

      <div className="header__auth">
        <p className="header__span">{email}</p>
        <button onClick={handleLogout} className="header__logout">
          Sair
        </button>
      </div>
    </header>
  );
}

export default Header;
