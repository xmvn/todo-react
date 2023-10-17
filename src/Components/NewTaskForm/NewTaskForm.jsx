import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import './NewTaskForm.css';

const NewTaskForm = ({ setTodoData }) => {
  const [taskText, setTaskText] = useState('');

  const addTodo = () => {
    setTodoData((prevTodoData) => {
      return [
        ...prevTodoData,
        {
          status: null,
          description: taskText,
          created: Date.now(),
          id: uuidv4(),
        },
      ];
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo();
    setTaskText('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className='new-todo'
        placeholder='What needs to be done?'
        autoFocus
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
    </form>
  );
};

NewTaskForm.propTypes = {
  setTodoData: PropTypes.func.isRequired,
};

export default NewTaskForm;
