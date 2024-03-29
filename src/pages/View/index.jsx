import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import List from "../../api/api";

const View = () => {
  const list = new List();
  const [lists, setList] = useState([]);

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  // funcoes de abertura e fechamento do modal
  const AbreModal = () => setOpen(true);
  const FechaModal = () => setOpen(false);

  // chama o use effect sem parametro de dependencia (executa uma vez ao renderizar o componente)
  // chamando a funcao getMusicaById
  useEffect(() => {
    getListById();
  }, []);

  // acessa o id no parametro da url;
  const { id } = useParams();

  // faz a chamada para a api passando o id como parametro para buscar o objeto da musica (invidual por id)
  const getListById = async () => {
    const request = await list.findId(id);
    const data = await request.json();
    setList(data.list);
  };

  const handleDelete = async () => {
    const response = await list.delete(id);
    const data = await response.json();
    if (data.success) {
      console.log("excluido");
      navigate("/");
    } 
  };

  return (
    <div className="container-fluid">
      <div className="row my-5">
        <div className="col-6">
          <div className="card my-5">
            <h1 className="text-center my-4">
              <b>Nome: </b>
              {lists.title}
            </h1>
            <h3 className="text-center">
              <b>Priority: </b>
              {lists.priority}
            </h3>
            <h4 className="text-center">
              <b>Status: </b> {lists.status}
            </h4>
            <h5 className="text-center">
              <b>Prazo: </b>
              {lists.deadline}
            </h5>
            <h6 className="text-center">
              <b>Data de Criação: </b>
              {lists.creation_date}
            </h6>
            <div className="btn-group mt-3 w-100">
              <Link to={`/edit/${lists._id}`} className="btn btn-info">
                Editar
              </Link>
              <button className="btn btn-danger" onClick={AbreModal}>
                Excluir
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={FechaModal} center showCloseIcon={false}>
        <h2 className="my-4">Deseja Realmente Excluir ?</h2>
        <div className="d-flex w-50 mx-auto justify-content-center">
          <button className="btn btn-danger mr-2" onClick={FechaModal}>
            Não
          </button>
          <button className="btn btn-success" onClick={handleDelete}>
            Sim
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default View;
