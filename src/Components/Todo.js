import { useState } from "react";
import React from "react";
import styles from "../styles/todo.module.scss";

export default function Todo(props) {
  const { todo, n, deleteTodo, setTodo } = props;
  const [done, setDone] = useState(false);

  return (
    <div className={`row sp-btw ${styles.todo} ${done && "done"}`}>
      <div className={styles.list} onClick={() => setTodo(todo)}>
        <input type="checkbox" onChange={() => setDone(!done)} />
        <span>{n}.</span>
        <span>{todo.title}</span>
      </div>
      <button onClick={() => deleteTodo(todo)}>Delete</button>
    </div>
  );
}
