import React, { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'


function Todo({ todos, completeTodo, removeTodo, editTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    text: ''
  })

  function handleEditFieldChange(evt) {
    console.log('activity', evt.target.value)
    setEdit({
      ...edit,
      text: evt.target.value ? evt.target.value : '',
    })
  }

  function handleOnSubmit(evt) {
    evt.preventDefault()
    console.log(edit)

    editTodo({...edit})

    setEdit({ id: null, text: '' })

  }


  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' :
        'todo-row'} key={index} style={{ display: 'flex' }}>

      {/* IIFE (immediately invoked function expression) */}
      {function () {
        if (todo.id === edit.id) {
          return (
            <form onSubmit={handleOnSubmit}>
              <input type="text" value={edit.text} onKeyup={handleEditFieldChange} onChange={handleEditFieldChange} />
              <button type="submit">Save</button>
            </form>
          )
        }
        return (
          <React.Fragment>
            {/*  React frg digunakan untuk membungkus children yg baru */}
            <div
              key={todo.id}
              onClick={() => completeTodo(todo.id)}
              style={{ marginRight: '25px' }}>
              {todo.text}
            </div>

            <div className='icons' >
              <RiCloseCircleLine
                onClick={() => removeTodo(todo.id)}
                className='delete-icon' />
              <TiEdit
                onClick={() => {
                  setEdit({ id: todo.id, text: todo.text })
                }}
                className='edit-icon' />
            </div>
          </React.Fragment>
        )
      }()}
    </div>
  ))
}

export default Todo
