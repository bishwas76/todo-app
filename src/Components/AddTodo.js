import React from 'react'

const AddTodo = ({ setInputTodo, setTodo, todos, inputTodo }) => {

    const inputHandler = (e) => {
        setInputTodo(e.target.value);
    };

    const submitHanderler = (e) => {
        e.preventDefault();
        setTodo([
            ...todos, 
            {
                text: inputTodo, 
                completed: false, 
                id: Math.random()*1000
            }
        ]);
        setInputTodo("");
    };

    return (
        <div className = "addTodo">
            <form className = "todo-form">
            <h2 className = "heading">My Todo List</h2>
                <input 
                    value = {inputTodo} 
                    type = "text" 
                    className = "todo-input" 
                    onChange = {inputHandler}
                    placeholder = "Add your todo...." />
                <button 
                    onClick = {submitHanderler} 
                    className = "todo-button btn-success" 
                    type = "submit">
                        <i className = "fas fa-plus-square"></i>
                </button>
            </form>   
        </div>
    )
}

export default AddTodo
