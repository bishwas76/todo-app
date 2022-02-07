import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, setTodo }) => {
    return (
        <div className = "todo-div">
            <div className = "todo-container">
                <ul className = "todo-list">
                    {todos.map((todo) => (
                        <Todo 
                            key = {todo.id} 
                            text = {todo.text} 
                            setTodo = {setTodo} 
                            todo = {todo}
                            todos = {todos} />
                        ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoList
