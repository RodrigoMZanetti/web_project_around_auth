import { useState } from "react";
import { Link } from "react-router-dom";

function Register({ handleLogIn }) {
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
    <div>
      <h1>Inscreva-se</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          required
          name="email"
          id="email"
          placeholder="E-mail"
          onCanPlay={handleEmail}
          value={email}
        />
        <input
          type="password"
          required
          name="password"
          id="password"
          placeholder="Senha"
          onChange={handlePassword}
          value={password}
        />

        <div>
          <button type="submit">Inscreva-se</button>
        </div>
      </form>
      <Link to="/signin">Já é um membro? Faça login aqui!</Link>
    </div>
  );
}

export default Register;
