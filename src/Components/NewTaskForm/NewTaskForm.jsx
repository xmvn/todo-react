import React, { useState } from 'react';
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
          created: 'created just now',
          id: Math.random() * 10000,
        },
      ];
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo();
    console.log(taskText);
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

export default NewTaskForm;
