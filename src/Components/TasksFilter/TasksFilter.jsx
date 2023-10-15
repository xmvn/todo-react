import React from 'react';
import './TasksFilter.css';

const TasksFilter = ({ filter, setFilter }) => {
  const handleFilterAll = () => {
    setFilter('all');
  };

  const handleFilterActive = () => {
    setFilter('active');
  };

  const handleFilterCompleted = () => {
    setFilter('completed');
  };
  return (
    <ul className='filters'>
      <li>
        <button
          className={filter === 'all' ? 'selected' : ''}
          onClick={handleFilterAll}
        >
          All
        </button>
      </li>
      <li>
        <button
          className={filter === 'active' ? 'selected' : ''}
          onClick={handleFilterActive}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className={filter === 'completed' ? 'selected' : ''}
          onClick={handleFilterCompleted}
        >
          Completed
        </button>
      </li>
    </ul>
  );
};
export default TasksFilter;
