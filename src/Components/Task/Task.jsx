import React from 'react'
import './Task.css'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'

const Task = ({
  todoData,
  deleteTask,
  completeTask,
  editTask,
  changeDescription,
  editedTaskDescription,
  setEditedTaskDescription,
}) => {
  return todoData.map(({ status, id, description, created }) => (
    <li className={status} key={id}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={status === 'completed'} onChange={() => completeTask(id)} />
        <label>
          <span className="description">{description}</span>
          <span className="created">Created {formatDistanceToNow(created, { includeSeconds: true })} ago</span>
        </label>
        <button className="icon icon-edit" onClick={() => editTask(id, description)}></button>
        <button className="icon icon-destroy" onClick={() => deleteTask(id)}></button>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const editedDescription = editedTaskDescription[id] !== undefined ? editedTaskDescription[id] : description
          if (editedDescription.trim() !== '') {
            changeDescription(id, editedDescription)
          }
        }}
      >
        <input
          type="text"
          className="edit"
          value={editedTaskDescription[id] !== undefined ? editedTaskDescription[id] : description}
          onChange={(e) => {
            const updatedEditedTaskDescription = {
              ...editedTaskDescription,
              [id]: e.target.value,
            }
            setEditedTaskDescription(updatedEditedTaskDescription)
          }}
        />
      </form>
    </li>
  ))
}

Task.defaultProps = {
  todoData: [],
  description: 'Пустая задача',
  status: 'null',
  created: Date.now(),
  editing: false,
  deleteTask: () => {},
  completeTask: () => {},
  editTask: () => {},
  changeDescription: () => {},
}

Task.propTypes = {
  todoData: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired,
  completeTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
  changeDescription: PropTypes.func.isRequired,
  description: PropTypes.string,
  status: PropTypes.string,
  created: PropTypes.number,
  editing: PropTypes.bool,
}

export default Task
