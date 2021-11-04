import React, { useState, createContext, useEffect } from "react";
import "./App.scss";
import Todos from "./Components/Todos";
import Create from "./Components/Create";
import styles from "./styles/header.module.scss";
import Card from "./Components/Card";

export const Context = createContext(null);

function App() {
  const [tab, setTab] = useState("Todos");
  const tabs = ["Todos", "Create"];
  const [todo, setTodo] = useState();

  const [todos, setTodos] = useState(
    localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : []
  );

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(
          [...data.slice(0, 11), ...todos].filter(
            (obj, i, arr) => arr.findIndex((elm) => elm.id === obj.id) === i
          )
        );
      });
  }, []);

  return (
    <div className="App centered col">
      <header className={`${styles.header} row centered`}>
        {tabs.map((e) => (
          <button onClick={() => setTab(e)}>{e}</button>
        ))}
      </header>
      <Context.Provider value={{ todos, setTodos, setTodo }}>
        {todo ? (
          <Card todo={todo} setTodo={setTodo} />
        ) : tab === "Todos" ? (
          <Todos />
        ) : (
          tab === "Create" && <Create />
        )}
      </Context.Provider>
    </div>
  );
}

export default App;
