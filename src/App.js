import { useEffect, useState } from 'react';
import Todos from "./Components/Todos"
import './App.css';


function Todo() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("")
  const [search, setSearch] = useState("")
  

  const handleChange = (e)=> {
    setValue(e.target.value)
  };

  const handleClick = ()=> {
    setTodos([...todos,value])
    setValue("")
  }

  const deleteTodo = (text)=> {
    setTodos(todos.filter((e)=> e !== text))
  }

  useEffect(() => {
    if (todos.length < 1) {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data) => {
          setTodos([...todos, ...data.map((e) => e.title)]);
        });
    }
  });


  return (
    <div className="todo">
      <h1>TodoShka</h1>
     <div>
       <input type="text" onChange={handleChange} value={value}/>
       <button onClick={handleClick}>Add todo</button>
     </div>
     <h2>Search everything in the world</h2>
     <input type="text" onChange={(e)=> {
       setSearch(e.target.value)}} />
     {search.length > 0 ?
     todos.filter((e)=> e.includes(search)).map((e,i)=> <Todos n={i} todo={e} deleteTodo={deleteTodo}/>) :
     todos.length > 0 && todos.map((e,i)=> <Todos n={i} todo={e} deleteTodo={deleteTodo}/>)}
    </div>
  );
}

export default Todo;
