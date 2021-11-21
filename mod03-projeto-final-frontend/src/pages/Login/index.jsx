import React from "react";
import Api from "../../api/api";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const userExist = async (event) => {
    event.preventDefault();
    const User = new Api.User();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const user = {
      email: email,
      password: password,
    };

    const request = await User.fetchFind(user);
    const result = await request.json();
    if (result.success) {
      navigate("/");
    } else {
      alert("Usúario não encontrado. Tente novamente.");
    }
  };
  return (
    <main className="container-fluid">
      <form onSubmit={userExist} id="form">
        <div className="mb-3 col-5">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            id="email"
            className="form-control"
            type="email"
            placeholder="Seu email"
            name="email"
            required
          />
        </div>
        <div className="mb-3 col-5">
          <label htmlFor="password" className="form-label">
            Senha:
          </label>
          <input
            id="password"
            className="form-control"
            type="password"
            placeholder="Defina sua senha"
            name="password"
            required
          />
        </div>
        <button type="submit" class="btn btn-dark">
          Entrar
        </button>
      </form>
    </main>
  );
};

export default Login;
