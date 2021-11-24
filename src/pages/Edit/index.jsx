import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import List from "../../api/api";
import "./styles.css"

const Edit = () => {
  const navigate = useNavigate();
  const [list, setList] = useState({
    title: "",
    priority: "",
    status: "",
    deadline: "",
  });

  const ClassList = new List();

  useEffect(() => {
    getListById();
  }, []);

  const { id } = useParams();

  const getListById = async () => {
    const request = await ClassList.findId(id);
    const data = await request.json();
    setList(data.list);
  };

  const handleFieldsChange = (evento) => {
    const listEdit = { ...list };
    listEdit[evento.target.name] = evento.target.value;
    setList(listEdit);
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const request = await ClassList.edit(list, id);
    const data = await request.json();
    alert(data.message);
    navigate(`/view/${id}`);
  };

  return (
    <main className="container-fluid">
    <div>
        <h2 id="title">Edição da tarefa</h2>
    </div>
      <form onSubmit={handleSubmit} id="form">
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
          Alterar
        </button>
      </form>
    </main>
  );
};

export default Edit;
