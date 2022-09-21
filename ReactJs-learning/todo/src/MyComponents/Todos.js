import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  console.log(props.todos);
  return (
    <div className="container">
      <h2 className="my-3text-center">Todos List</h2>

      {props.todos.length === 0
        ? "No tasks"
        : props.todos.map((todo, index) => {
            console.log(todo.No, "index");
            return (
              <TodoItem todo={todo} key={todo.No} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};
