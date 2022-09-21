import React, { useState } from "react";

export const AddTodo = ({ addTodo }) => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const Addtask = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or description cannot be blank");
    } else {
      console.log(title, desc);
      addTodo(title, desc);
    }
  };

  return (
    <div className="container my-3">
      <h3>Add a task</h3>
      <form onSubmit={Addtask}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-sm btn-success">
          Add
        </button>
      </form>
    </div>
  );
};
