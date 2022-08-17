import React from "react";
import ToDoCard from "../ToDoCard";

const index = (props) => {
  const _deleteTodoHandler = (id) => {
    props.deleteTodos(id);
  };
  const _updateTodoHandler = (id) => {
    props.updateTodos(id);
  };
  return (
    <div>
      {props.todos.map((todo) => {
        return (
          <ToDoCard
            key={todo.id}
            name={todo.name}
            desc={todo.desc}
            deleteHandler={() => {
              _deleteTodoHandler(todo.id);
            }}
            updateHandler={() => {
              _updateTodoHandler(todo.id);
            }}
          />
        );
      })}
    </div>
  );
};

export default index;
