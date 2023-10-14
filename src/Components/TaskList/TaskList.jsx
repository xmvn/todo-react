import React from 'react';
import Task from '../Task/Task';
import './TaskList.css';
const TaskList = ({ todoData, setTodoData }) => {
  const deleteTask = (id) => {
    const updatedTodoData = todoData.filter((todo) => todo.id !== id);
    setTodoData(updatedTodoData);
  };
  const completeTask = (id) => {
    setTodoData((prevTodoData) => {
      return prevTodoData.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            status: todo.status === 'completed' ? null : 'completed',
          };
        }
        return todo;
      });
    });
  };
  const editTask = (id) => {
    setTodoData((prevTodoData) => {
      return prevTodoData.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            status: 'editing',
          };
        }
        return todo;
      });
    });
  };
  const changeDescription = (id, value) => {
    setTodoData((prevTodoData) => {
      return prevTodoData.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            status: 'null',
            description: value,
          };
        }
        return todo;
      });
    });
  };

  return (
    <ul className='todo-list'>
      <Task
        todoData={todoData}
        deleteTask={deleteTask}
        completeTask={completeTask}
        editTask={editTask}
        changeDescription={changeDescription}
      />
    </ul>
  );
};

export default TaskList;
