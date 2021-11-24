import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import List from "../../api/api";
import "./styles.css"

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const Submit = async (event) => {
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

    const request = await list.edit(data, id);
    navigate(`/view/${id}`);
  };

  return (
    <main className="container-fluid">
    <div>
        <h2 id="title">Edição da tarefa</h2>
    </div>
      <form onSubmit={Submit} id="form">
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
            <option defaultValue="Alta">Alta</option> // Alta, Média e Baixa
            <option defaultValue="Média">Média</option>
            <option defaultValue="Baixa">Baixa</option>
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
            <option defaultValue="Fazer">Fazer</option> // Fazer, Fazendo, Feito
            <option defaultValue="Fazendo">Fazendo</option>
            <option defaultValue="Feito">Feito</option>
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
          Alterar
        </button>
      </form>
    </main>
  );
};

export default Edit;
