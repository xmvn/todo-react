import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import Task from '../Task/Task'

import './TaskList.css'

function TaskList({ todoData, setTodoData, filter }) {
  const [editedTaskDescription, setEditedTaskDescription] = useState({})
  const timerRef = useRef(null)

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
  const numberToTime = (num) => {
    const minutes = Math.trunc(num / 60)
    const seconds = num % 60
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }

  const startTimer = (id, status, taskTime) => {
    const task = todoData.find((todo) => todo.id === id)

    if (task && task.timerActivated !== true && status !== 'completed' && taskTime > 0) {
      setTodoData((prevTodoData) =>
        prevTodoData.map((todo) => (todo.id === id ? { ...todo, timerActivated: true } : todo))
      )

      timerRef.current = setInterval(() => {
        setTodoData((prevTodoData) =>
          prevTodoData.map((todo) => {
            if (todo.id === id) {
              const updatedTodo = {
                ...todo,
                taskTime: Math.max(0, todo.taskTime - 1),
              }

              if (updatedTodo.taskTime === 0) {
                pauseTimer(id)
                updatedTodo.status = 'completed'
              }

              return updatedTodo
            }
            return todo
          })
        )
        console.log('проверка на остановку таймера:', id)
      }, 1000)
    }
  }

  const pauseTimer = (id) => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
      setTodoData((prevTodoData) =>
        prevTodoData.map((todo) => (todo.id === id ? { ...todo, timerActivated: false } : todo))
      )
    }
  }

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
        numberToTime={numberToTime}
        startTimer={startTimer}
        pauseTimer={pauseTimer}
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
