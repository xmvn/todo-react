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

  return todoData.map((todo) => (
    <li className={todo.status} key={todo.id}>
      <div className='view'>
        <input
          className='toggle'
          type='checkbox'
          checked={todo.status === 'completed'}
          onChange={() => completeTask(todo.id)}
        />
        <label>
          <span className='description'>{todo.description}</span>
          <span className='created'>{todo.created}</span>
        </label>
        <button
          className='icon icon-edit'
          onClick={() => editTask(todo.id)}
        ></button>
        <button
          className='icon icon-destroy'
          onClick={() => deleteTask(todo.id)}
        ></button>
      </div>
      {todo.status === 'editing' ? (
        <form
          action=''
          onSubmit={() => changeDescription(todo.id, editedTaskDescription)}
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
