import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddForm from './AddForm';
import { deleteTodo, markAsDone } from '../features/todo/todoSlice';

const Todo = () => {
    const todos = useSelector((state) => state.todos);
    console.log(todos)

    const dispatch = useDispatch();

    const taskDelete = (id) => {
        dispatch(deleteTodo(id))
        console.log("Delete")
    }
    const markDone = (id) => {
        dispatch(markAsDone(id))
        console.log("Delete")
    }
    return (
        <div>
            <AddForm />
            <h1>Todos List</h1>
            <ul style={{ textAlign: "start" }}>
                {
                    todos.map((todo) => (
                        <li key={todo.id}><span style={{textDecoration: todo.isDone?"line-through":"none"}}>{todo.task}</span> &nbsp;
                            <button onClick={() => taskDelete(todo.id)}>Delete</button> &nbsp;
                            <button onClick={() => markDone(todo.id)}>Mark as done</button>
                            <br /><br /></li>

                    ))
                }
            </ul>
        </div>
    )
}

export default Todo
