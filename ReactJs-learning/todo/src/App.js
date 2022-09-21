import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState } from "react";

function App() {
  const onDelete = (todo) => {
    console.log("Delete onclick", todo);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo = (title, desc) => {
    console.log(title, desc);

    let taskno = todos[todos.length - 1].No + 1;
    const task = {
      title: title,
      description: desc,
      No: taskno,
    };
    setTodos([...todos, task]);
    console.log(task);
  };

  const [todos, setTodos] = useState([
    {
      No: 1,
      title: "Market",
      description: "Grocery",
    },
    {
      No: 2,
      title: "Office",
      description: "Job",
    },
  ]);
  return (
    <>
      <Header title="My ToDo List" searchBar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
