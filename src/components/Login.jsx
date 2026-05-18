import { useState } from "react";
import { Link } from "react-router-dom";

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
    <div>
      <h1>Entrar</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
          onChange={handleEmail}
          value={email}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Senha"
          onChange={handlePassword}
          value={password}
          required
        />
        <div>
          <button type="submit">Entrar</button>
        </div>
      </form>
      <Link to="/signup">Ainda não é membro? Inscreva-se aqui!</Link>
    </div>
  );
}

export default Login;
