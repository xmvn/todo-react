import React, { useState } from 'react';
import './Task.css';

const Task = ({
  todoData,
  deleteTask,
  completeTask,
  editTask,
  changeDescription,
}) => {
  const [editedTaskDescription, setEditedTaskDescription] = useState('');

  return todoData.map(({ status, id, description, created }) => (
    <li className={status} key={id}>
      <div className='view'>
        <input
          className='toggle'
          type='checkbox'
          checked={status === 'completed'}
          onChange={() => completeTask(id)}
        />
        <label>
          <span className='description'>{description}</span>
          <span className='created'>{created}</span>
        </label>
        <button
          className='icon icon-edit'
          onClick={() => editTask(id)}
        ></button>
        <button
          className='icon icon-destroy'
          onClick={() => deleteTask(id)}
        ></button>
      </div>
      {status === 'editing' ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            changeDescription(id, editedTaskDescription);
          }}
        >
          <input
            type='text'
            className='edit'
            value={editedTaskDescription}
            onChange={(e) => setEditedTaskDescription(e.target.value)}
          />
        </form>
      ) : null}
    </li>
  ));
};

export default Task;
