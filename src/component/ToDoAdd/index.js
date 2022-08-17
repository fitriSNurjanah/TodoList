import React from "react";

const index = (props) => {
  const { todo, setTodo, handleSubmit } = props;
  return (
    <div>
      <form
        className="form-container"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="form-field">
          <label className="nama">Name : </label>
          <input
            type="text"
            name="name"
            placeholder="What your plan?"
            value={todo.name}
            onChange={(e) => {
              setTodo({ ...todo, name: e.target.value });
            }}
          ></input>
        </div>
        <div>
          <label className="nama">Description : </label>
          <input
            type="text"
            name="description"
            placeholder="How it will going"
            value={todo.desc}
            onChange={(e) => {
              setTodo({ ...todo, desc: e.target.value });
            }}
          ></input>
        </div>
        <button type="submit" className="button-add">
          Add
        </button>
      </form>
    </div>
  );
};

export default index;
