import { useState } from "react";
import { Link } from "react-router-dom";
import "../../blocks/Login.css";
import logo from "../images/logo.svg";

function Login({ handleLogIn }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleLogIn({ email, password });
  }

  return (
    <div className="login">
      <div className="login__header">
        <img src={logo} alt="Around The U.S." className="login__logo" />
        <Link to="/signup" className="login__link">
          Entrar
        </Link>
      </div>
      <h1 className="login__title">Entrar</h1>
      <form onSubmit={handleSubmit} className="login__form">
        <input
          className="login__input"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
          onChange={handleEmail}
          value={email}
        />
        <input
          className="login__input"
          type="password"
          name="password"
          id="password"
          placeholder="Senha"
          onChange={handlePassword}
          value={password}
          required
        />
        <div>
          <button className="login__button" type="submit">
            Entrar
          </button>
        </div>
      </form>
      <Link to="/signup" className="login__footer-link">
        Ainda não é membro? Inscreva-se aqui!
      </Link>
    </div>
  );
}

export default Login;
