import React from "react";

export const TodoListItem = ({ todo, index, delTodo, toggle }) => {
  return (
    <li key={todo.id} className="list-group-item">
      <p
        onClick={(e) => {
          e.preventDefault();
          console.log(todo);
          toggle(todo);
        }}
        style={{ textDecoration: todo.done === true ? "line-through" : null }}
      >
        {index + 1}. {todo.desc}
      </p>
      <button
        className="btn btn-danger"
        onClick={(e) => {
          e.preventDefault();
          delTodo(todo);
          console.log(todo);
        }}
      >
        Borrar
      </button>
    </li>
  );
};
