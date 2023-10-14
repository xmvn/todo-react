import React from 'react';
import './NewTaskForm.css';

const onSubmit = (e) => {
  e.preventDefault();
  console.log('123');
};
const NewTaskForm = () => {
  return (
    <form onSubmit={onSubmit}>
      <input
        className='new-todo'
        placeholder='What needs to be done?'
        autoFocus
      ></input>
    </form>
  );
};
export default NewTaskForm;
