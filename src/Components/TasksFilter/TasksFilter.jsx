import React, { useState } from 'react';
import './TasksFilter.css';
import PropTypes from 'prop-types';

const TasksFilter = ({ filter, setFilter }) => {
  const [filterCollection] = useState(['all', 'active', 'completed']);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <ul className='filters'>
      {filterCollection.map((filterOption) => (
        <li key={filterOption}>
          <button
            className={filter === filterOption ? 'selected' : ''}
            onClick={() => handleFilterChange(filterOption)}
          >
            {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  );
};

TasksFilter.propTypes = {
  filter: PropTypes.oneOf(['all', 'active', 'completed']).isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default TasksFilter;
