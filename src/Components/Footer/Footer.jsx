import React from 'react'
import PropTypes from 'prop-types'

import TasksFilter from '../TasksFilter/TasksFilter'
import './Footer.css'

const Footer = ({ taskCount, filter, setFilter, setTodoData }) => {
  const clearCompleted = () => {
    setTodoData((prevTodoData) => prevTodoData.filter((todo) => todo.status !== 'completed'))
  }
  return (
    <footer className="footer">
      <span className="todo-count">{taskCount} items left</span>
      <TasksFilter filter={filter} setFilter={setFilter} />
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  )
}
Footer.propTypes = {
  taskCount: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  setTodoData: PropTypes.func.isRequired,
}

Footer.defaultProps = {
  taskCount: 0,
  filter: 'all',
  setFilter: () => {},
  setTodoData: () => {},
}

export default Footer
