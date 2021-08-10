import {useState, useEffect} from 'react';
import React from 'react'


export default function Todo(props) {
    const {todo, n, deleteTodo} = props;
    const [done, setDone] = useState(false)

    useEffect(() => {
        return () => {
          setDone(false);
        };
      }, []);

    return (
        <div className={`todos ${done &&"done"}`}>
            <div className="list">
            <input type="checkbox" onChange={()=> setDone(!done)} />
            <span>{n}.</span>
            <span>{todo}</span>
            </div>
            <button onClick={()=> deleteTodo(todo)}>Delete</button>
        </div>
    )
}