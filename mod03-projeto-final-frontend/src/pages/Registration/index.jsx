import React from "react";
import Api from "../../api/api.js";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const submitForm = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const User = new Api.User();

    let user = {
      username: name,
      email: email,
      password: password,
    };

    const request = await User.fetchPost(user);
    const result = await request.json();
    if (request.status === 500) {
      alert("Erro no servidor! Tente novamente.")
    }
    if (result.success) {
      navigate("/");
    } else {
      alert("Não foi possivel criar o usúario. Tente novamente.")
    }
  };

  return (
    <main className="container-fluid">
      <form onSubmit={submitForm} id="form">
        <div className="mb-3 col-5">
          <label htmlFor="name" className="form-label">
            Nome de Usuario:
          </label>
          <input
            id="name"
            className="form-control"
            type="text"
            placeholder="Seu nome de usuario"
            name="name"
            required
          />
        </div>
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
          Cadastrar
        </button>
      </form>
    </main>
  );
};

export default Registration;
