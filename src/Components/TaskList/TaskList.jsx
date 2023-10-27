import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Task from '../Task/Task'

import './TaskList.css'

function TaskList({ todoData, setTodoData, filter }) {
  const [editedTaskDescription, setEditedTaskDescription] = useState({})

  const deleteTask = (id) => {
    const updatedTodoData = todoData.filter((todo) => todo.id !== id)
    setTodoData(updatedTodoData)
  }
  const completeTask = (id) => {
    setTodoData((prevTodoData) =>
      prevTodoData.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            status: todo.status === 'completed' ? null : 'completed',
          }
        }
        return todo
      })
    )
  }
  const editTask = (id, description) => {
    setEditedTaskDescription({
      id: id,
      description: description,
    })

    setTodoData((prevTodoData) =>
      prevTodoData.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            status: 'editing',
          }
        }
        return todo
      })
    )
  }
  const changeDescription = (id, value) => {
    setTodoData((prevTodoData) =>
      prevTodoData.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            status: null,
            description: value,
          }
        }
        return todo
      })
    )
  }
  const filteredTasks = todoData.filter((todo) => {
    if (filter === 'all') {
      return true
    }
    if (filter === 'active') {
      return todo.status !== 'completed'
    }
    if (filter === 'completed') {
      return todo.status === 'completed'
    }
    return true
  })
  return (
    <ul className="todo-list">
      <Task
        todoData={filteredTasks}
        deleteTask={deleteTask}
        completeTask={completeTask}
        editTask={editTask}
        changeDescription={changeDescription}
        editedTaskDescription={editedTaskDescription}
        setEditedTaskDescription={setEditedTaskDescription}
      />
    </ul>
  )
}

TaskList.propTypes = {
  todoData: PropTypes.array.isRequired,
  setTodoData: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
}

TaskList.defaultProps = {
  todoData: [],
  setTodoData: () => {},
  filter: 'all',
}

export default TaskList
