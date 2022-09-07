import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../styles/modules/modal.module.scss";
import { MdOutlineClose } from "react-icons/md";
import Button from "./Button";
import { addTodo, updateTodo } from "../slices/todoSlice";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";

function TodoModal({ type, modalOpen, setmodalOpen, todo }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("Incomplete");

  const dispatch = useDispatch();

  useEffect(() => {
    if (type === "update" && todo) {
      setTitle(todo.title);
      setDesc(todo.desc);
      setStatus(todo.status);
    } else {
      setTitle("");
      setDesc("");
      setStatus("Incomplete");
    }
  }, [type, todo, modalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ title }, { desc }, { status });
    if (title === "") {
      toast.error("Enter a Title");
      return;
    }
    if (desc === "") {
      toast.error("Enter the description");
      return;
    }
    if (title && desc && status) {
      if (type === "add") {
        // console.log("ADD");
        dispatch(
          addTodo({
            id: uuid(),
            title: title,
            desc: desc,
            status: status,
            time: new Date().toLocaleString(),
          })
        );
        toast.success("Task Added Succcessfully");
      }
      if (type === "update") {
        // console.log("Update");
        if (
          todo.title !== title ||
          todo.desc !== desc ||
          todo.status !== status
        ) {
          dispatch(
            updateTodo({
              ...todo,
              title,
              desc,
              status,
            })
          );
        } else {
          toast.error("No changes done");
        }
      }
      setmodalOpen(false);
    }
  };

  return (
    modalOpen && (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div
            className={styles.closeButton}
            onClick={() => setmodalOpen(false)}
            onKeyDown={() => setmodalOpen(false)}
            tabIndex={0}
            role="button"
          >
            <MdOutlineClose />
          </div>
          <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <h1 className={styles.formTitle}>
              {" "}
              {type === "update" ? "Update" : "Add"} task{" "}
            </h1>
            <label htmlFor="title">
              Title
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              Description
              <input
                type="textarea"
                id="desc"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </label>
            <label htmlFor="status">
              Status
              <select
                name="status"
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Incomplete">Incomplete</option>
                <option value="Completed">Completed</option>
              </select>
            </label>

            <div className={styles.buttonContainer}>
              <Button type="submit" variant="primary">
                {type === "update" ? "Update" : "Submit"} task{" "}
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => setmodalOpen(false)}
                onKeyDown={() => setmodalOpen(false)}
              >
                cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default TodoModal;
