import React, { useState } from 'react'

import TaskList from '../TaskList/TaskList'
import Footer from '../Footer/Footer'
import NewTaskForm from '../NewTaskForm/NewTaskForm'
import './TodoApp.css'

const TodoApp = () => {
  const [todoData, setTodoData] = useState([
    {
      status: 'completed',
      description: 'Completed task',
      created: Date.now(),
      id: 1,
    },
    {
      status: 'editing',
      description: 'Editing task',
      created: Date.now(),
      id: 2,
    },
    {
      status: null,
      description: 'Active task',
      created: Date.now(),
      id: 3,
    },
  ])
  const [filter, setFilter] = useState('all')
  const incompletedCount = todoData.filter((el) => el.status !== 'completed')

  return (
    <div className="todoapp">
      <h1>Todos</h1>
      <NewTaskForm setTodoData={setTodoData} />
      <TaskList todoData={todoData} setTodoData={setTodoData} filter={filter} />
      <Footer
        taskCount={incompletedCount.length ? incompletedCount.length : 0}
        filter={filter}
        setFilter={setFilter}
        setTodoData={setTodoData}
      />
    </div>
  )
}

export default TodoApp
