import React, { useEffect, useState, useContext } from "react";
import Todo from "./Todo";
import styles from "../styles/todos.module.scss";
import { Context } from "../App";

const Todos = () => {
  const { todos, setTodos, setTodo } = useContext(Context);

  const [search, setSearch] = useState("");

  const deleteTodo = (text) => {
    setTodos(todos.filter((e) => e !== text));
  };

  return (
    <div className={`col centered sp-btw ${styles.todos}`}>
      <input
        className={styles.input}
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {search.length > 0
        ? todos
            .filter((e) => e.title.includes(search))
            .map((e, i) => (
              <Todo n={i} todo={e} deleteTodo={deleteTodo} setTodo={setTodo} />
            ))
        : todos.length > 0 &&
          todos.map((e, i) => (
            <Todo n={i} todo={e} deleteTodo={deleteTodo} setTodo={setTodo} />
          ))}
    </div>
  );
};

export default Todos;
