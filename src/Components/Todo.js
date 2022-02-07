import React from 'react'

const Todo = ({ text, todos, todo, setTodo }) => {

    const deleteHandler = () => {
        setTodo(todos.filter((element) => 
            element.id !== todo.id
            ));
    };

    const completeHandler = () => {
        setTodo(todos.map((items) => {
            if(items.id === todo.id) {
                return {
                    ...items,
                    completed: true
                };
            }
            return items;
        }));
    };

    return (
        <React.Fragment>
            <div className = "todo">
                <li className = {`todo-item ${todo.completed ? "todo-completed" : ""}`}>
                    {text}
                </li>
                <div className = {`OnGoing ${todo.completed ? "completed" : ""}`}>
                    <span>
                        {`${todo.completed ? "Completed" : "On Going"}`}
                    </span>
                </div>
                <br />
                <button onClick = {completeHandler} className = "btn-check btn-success">
                    <i className = "fas fa-check" />
                </button>
                <button onClick = {deleteHandler} className  = "btn-trash btn-danger">
                    <i className = "fas fa-trash" />
                </button>
            </div>
            <br />
        </React.Fragment>
    )
}

export default Todo
