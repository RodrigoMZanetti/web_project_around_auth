import "../../blocks/Register.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

function Register({ handleRegister }) {
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
    handleRegister({ email, password });
  }

  return (
    <div className="auth">
      <div className="auth__header">
        <img src={logo} alt="Around The U.S." className="auth__logo" />
        <Link to="/signin" className="auth__link">
          Faça o Login
        </Link>
      </div>
      <h1 className="auth__title">Inscreva-se</h1>
      <form onSubmit={handleSubmit} className="auth__form">
        <input
          className="auth__input"
          type="email"
          required
          name="email"
          id="email"
          placeholder="E-mail"
          onChange={handleEmail}
          value={email}
        />
        <input
          className="auth__input"
          type="password"
          required
          name="password"
          id="password"
          placeholder="Senha"
          onChange={handlePassword}
          value={password}
        />

        <button className="auth__button" type="submit">
          Inscreva-se
        </button>
      </form>
      <Link to="/signin" className="auth__footer-link">
        Já é um membro? Faça login aqui!
      </Link>
    </div>
  );
}

export default Register;
