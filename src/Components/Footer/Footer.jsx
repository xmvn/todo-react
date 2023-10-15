import React from 'react';
import TasksFilter from '../TasksFilter/TasksFilter';
import './Footer.css';

const Footer = ({ taskCount, filter, setFilter, todoData, setTodoData }) => {
  const clearCompleted = () => {
    setTodoData((prevTodoData) =>
      prevTodoData.filter((todo) => todo.status !== 'completed')
    );
  };
  return (
    <footer className='footer'>
      <span className='todo-count'>{taskCount} items left</span>
      <TasksFilter filter={filter} setFilter={setFilter} />
      <button className='clear-completed' onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
