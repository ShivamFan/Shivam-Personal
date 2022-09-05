import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const changeInput = (e) => {
    setInput(e.target.value);
  };

  const Addtask = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={Addtask}>
      {props.edit ? (
        <>
          {" "}
          <input
            type="text"
            placeholder="Update your item"
            value={input}
            name="text"
            className="todo-input edit"
            onChange={changeInput}
            ref={inputRef}
          />
          <button className="todo-button edit">Update</button>{" "}
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Type a Title"
            value={input}
            name="text"
            className="todo-input"
            onChange={changeInput}
            ref={inputRef}
          />
          <button className="todo-button">Add</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;