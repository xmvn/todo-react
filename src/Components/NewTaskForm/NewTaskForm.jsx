import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'

import './NewTaskForm.css'

const NewTaskForm = ({ setTodoData }) => {
  const [task, setTask] = useState({
    text: '',
    min: '',
    sec: '',
  })

  const addTodo = () => {
    const taskTime = Number(task.min) * 60 + Number(task.sec)

    setTodoData((prevTodoData) => [
      ...prevTodoData,
      {
        status: null,
        description: task.text,
        created: Date.now(),
        id: uuidv4(),
        taskTime: taskTime ? taskTime : 0,
        timerActivated: false,
      },
    ])
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (task.text.trim() !== '') {
      addTodo()
      setTask({ text: '', min: '', sec: '' })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    let sanitizedValue

    if (name === 'min' || name === 'sec') {
      sanitizedValue = Math.max(0, Math.min(60, parseInt(value, 10))) || 0
    } else {
      sanitizedValue = value
    }

    setTask((prevTask) => ({ ...prevTask, [name]: sanitizedValue }))
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSubmit(e)
    }
  }

  return (
    <form onSubmit={onSubmit} className="new-todo-form">
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        name="text"
        value={task.text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <input
        className="new-todo-form__timer"
        placeholder="Min"
        type="number"
        name="min"
        onChange={handleChange}
        min={0}
        max={60}
        value={task.min}
        onKeyDown={handleKeyDown}
      />
      <input
        className="new-todo-form__timer"
        placeholder="Sec"
        type="number"
        name="sec"
        min={0}
        max={60}
        onChange={handleChange}
        value={task.sec}
        onKeyDown={handleKeyDown}
      />
    </form>
  )
}

NewTaskForm.propTypes = {
  setTodoData: PropTypes.func.isRequired,
}

export default NewTaskForm
