import React, { useState } from 'react'
import Todoform from './Todoform'
import Todo from './Todo'
import todosMock from '../_mock/todos'

function Todolist() {
    const [todos, setTodos] = useState([...todosMock])

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    };

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    const editTodo = todoItem => {
        const newTodos = todos.map(todo => {
            if (todo.id === todoItem.id) {
                return {
                    ...todo,
                    text: todoItem.text
                }
            }
            return todo
        })
        setTodos([...newTodos])
    }

    return (
        <div>
            <h1>What's your plan for today?</h1>
            <Todoform onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                editTodo={editTodo}
            />
        </div>
    )
}

export default Todolist
