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
            </form>
        </>
    )
}