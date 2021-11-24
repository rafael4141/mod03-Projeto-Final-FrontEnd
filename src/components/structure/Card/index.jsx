import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const list = props.data;
  return (
    <Link to={`/view/${list._id}`} className="col">
      <div className="card text-white bg-dark mb-3">
        <div className="card-body">
          <h5 className="card-title">Nome da Tarefa:</h5>
          <p className="card-text">{list.title}</p>
          <h5 className="card-title">
            Prioridade:{" "}
            <span className="badge bg-primary">{list.priority}</span>
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default Card;
