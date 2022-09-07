import { format } from "date-fns/esm";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../slices/todoSlice";
import styles from "../styles/modules/todoItem.module.scss";
import { getClasses } from "../utils/getClasses";
import CheckButton from "./CheckButton";
import TodoModal from "./TodoModal";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  useEffect(() => {
    if (todo.status === "Completed") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  const handleDelete = () => {
    // console.log("delete clicked");
    dispatch(deleteTodo(todo.id));
    toast.success("Task Deleted Successfully");
  };

  const handleEdit = () => {
    setUpdateModalOpen(true);
  };

  const handleCheck = () => {
    // console.log("hello check");
    setChecked(!checked);
    dispatch(
      updateTodo({
        ...todo,
        status: checked ? "Incomplete" : "Completed",
      })
    );
  };
  return (
    <>
      <div className={styles.item}>
        <div className={styles.todoDetails}>
          <CheckButton checked={checked} handleCheck={handleCheck} />
          <div className={styles.texts}>
            <p
              className={getClasses([
                styles.todoText,
                todo.status === "Completed" && styles["todoText--completed"],
              ])}
            >
              {todo.title}
              <br />
              {todo.desc}
            </p>
            <p className={styles.time}>
              {format(new Date(todo.time), "p, MM/dd/yyyy")}
            </p>
          </div>
        </div>
        <div className={styles.todoActions}>
          <div
            className={styles.icon}
            onClick={handleEdit}
            onKeyDown={handleEdit}
            tabIndex={0}
            role="button"
          >
            <MdEdit />
          </div>
          <div
            className={styles.icon}
            onClick={handleDelete}
            onKeyDown={handleDelete}
            tabIndex={0}
            role="button"
          >
            <MdDelete />
          </div>
        </div>
      </div>
      <TodoModal
        type={"update"}
        todo={todo}
        modalOpen={updateModalOpen}
        setmodalOpen={setUpdateModalOpen}
      />
    </>
  );
}

export default TodoItem;
