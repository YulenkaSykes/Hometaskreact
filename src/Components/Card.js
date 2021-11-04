import React from "react";
import styles from "../styles/card.module.scss";

const Card = ({ todo, setTodo }) => {
  return (
    <div className={`col centered ${styles.card}`}>
      <span>{todo.title}</span>
      <span>{todo.completed}</span>
      <button onClick={() => setTodo(null)}>Back</button>
    </div>
  );
};

export default Card;
