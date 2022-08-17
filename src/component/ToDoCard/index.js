import React from "react";

const index = (props) => {
  const { id, name, desc } = props;
  return (
    <div className="card">
      <div className="card-container">
        <div className="card-header">
          <h1>Todo Card</h1>
        </div>
        <div className="card-content">
          <div className="card-field">Name : {name} </div>
          <div className="card-field">Description : {desc} </div>
        </div>
        <button className="card-delete" onClick={() => props.deleteHandler(id)}>
          Delete
        </button>
        <button className="card-update" onClick={() => props.updateHandler(id)}>
          Update
        </button>
      </div>
    </div>
  );
};

export default index;
