import React, { useState, useReducer } from "react";

import { initialState, reducer } from "../reducers/reducers";

const ToDo = () => {
    const [newTodo, setNewTodo] = useState("");
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChanges = (e) => {
        setNewTodo(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setNewTodo("");
    };

    return(
        <>
            <form onSubmit={handleSubmit}>
                <h1>To-Do List:</h1>

                <input 
                    type="text"
                    name="newTodo"
                    value={newTodo}
                    onChange={handleChanges}
                />
                <button className="add" onClick={() => dispatch({ type: "ADD_TASK", payload: newTodo })}>Create a Task</button>
            </form>
            <ul>
                {state.map(todo => (
                    <li className={todo.completed ? "completed" : ""}
                        key={todo.id}
                        onClick={() => dispatch({ type: "TOGGLE_COMPLETE", id: todo.id })}
                    >
                        {todo.item}
                    </li>
                ))}
            </ul>
            <button className="remove" onClick={() => dispatch({ type: "REMOVE_TASK", payload: state })}>Clear Completed Tasks</button>
        </>
    )
}

export default ToDo;