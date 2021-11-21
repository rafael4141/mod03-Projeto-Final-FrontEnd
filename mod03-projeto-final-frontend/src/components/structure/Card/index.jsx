import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const list = props.data;
  return (
    <Link to={`/view/${list._id}`} className="col">
      <div className="card text-white bg-dark mb-3">
        <div className="card-body">
          <h5 className="card-title">Tarefa:</h5>
          <p className="card-text">nome da tarefa</p>
          <h5 className="card-title">Prioridade:</h5>
          <span className="badge bg-primary">Alta</span>
          <h5 className="card-title">Status:</h5>
          <span className="badge bg-primary">fazer</span>
          <h5 className="card-title">Prazo:</h5>
          <p className="card-text">10 dias</p>
          {/* <p className="card-text">{list.deadline}</p> */}
          {/* <p className="card-text">{list.priority}</p> */}
          <small className="card-text">Data de criação: {list.creation_date}</small>
        </div>
      </div>
    </Link>
  );
};

export default Card;
