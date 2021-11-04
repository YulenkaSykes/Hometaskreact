import React, { useState, useContext } from "react";
import { Context } from "../App";
import Alert from "@material-ui/lab/Alert";

const Create = () => {
  const { todos, setTodos } = useContext(Context);
  //   const [todos, setTodos] = useState(
  //     localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : []
  //   );
  const [value, setValue] = useState("");
  const [click, setClick] = useState(false);
  //   const [alert, setAlert] = useState(true);

  const handleClick = () => {
    // localStorage.setItem(
    //   "todo",
    //   JSON.stringify([
    //     ...todos,
    //     { userId: 1, id: todos.length, title: value, completed: true },
    //   ])
    // );
    setTodos([
      ...todos,
      { userId: 1, id: todos.length, title: value, completed: true },
    ]);
    setValue("");
    setClick(true);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="col centered">
      <h3>Create todo</h3>
      <div className="row">
        <input type="text" onChange={handleChange} value={value} />
        <button
          onClick={() => {
            handleClick();
            setTimeout(() => {
              setClick(false);
            }, 1000);
          }}
        >
          Add todo
        </button>
      </div>
      {click ? (
        <Alert severity="success" className="alert">
          Todo saved
        </Alert>
      ) : (
        false
      )}
    </div>
  );
};

export default Create;
