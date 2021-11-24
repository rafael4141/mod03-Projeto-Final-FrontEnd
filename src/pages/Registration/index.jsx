import React from "react";
import List from "../../api/api.js";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const submitForm = async (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const priority = event.target.priority.value;
    const status = event.target.status.value;
    const deadline = event.target.deadline.value;
    const list = new List();

    const data = {
      title: title,
      priority: priority,
      status: status,
      deadline: deadline,
    };

    const request = await list.create(data);
    const result = await request.json();
    console.log(result)
    if (request.status === 500) {
      alert("Erro no servidor! Tente novamente.");
    }
    if (result.success) {
      navigate("/");
    } else {
      alert("Não foi possivel criar a tarefa. Tente novamente.");
    }
  };

  return (
    <main className="container-fluid">
      <h2>Cadastrar tarefa</h2>
      <form onSubmit={submitForm} id="form">
        <div className="mb-3 col-5">
          <label htmlFor="title" className="form-label">
            Nome da Tarefa:
          </label>
          <input
            id="title"
            className="form-control"
            type="text"
            placeholder="Nome da tarefa"
            name="title"
            required
          />
        </div>
        <div className="mb-3 col-5">
          <label htmlFor="priority" className="form-label">
            Prioridade:
          </label>
          <select
            id="priority"
            className="form-select"
            aria-label="Default select example"
          >
            <option selected>Selecione</option>
            <option value="Alta">Alta</option> // Alta, Média e Baixa
            <option value="Média">Média</option>
            <option value="Baixa">Baixa</option>
          </select>
        </div>
        <div className="mb-3 col-5">
          <label htmlFor="status" className="form-label">
            Status:
          </label>
          <select
            id="status"
            className="form-select"
            aria-label="Default select example"
          >
            <option selected>Selecione</option>
            <option value="Fazer">Fazer</option> // Fazer, Fazendo, Feito
            <option value="Fazendo">Fazendo</option>
            <option value="Feito">Feito</option>
          </select>
        </div>
        <div className="mb-3 col-5">
          <label htmlFor="deadline" className="form-label">
            Prazo:
          </label>
          <input
            id="deadline"
            className="form-control"
            type="date"
            placeholder="Prazo"
            name="deadline"
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
