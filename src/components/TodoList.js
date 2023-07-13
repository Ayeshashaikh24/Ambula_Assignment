import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), title: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const markTaskCompleted = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list">
      <h2>To-Do List</h2>
      <div className="todo-form">
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <span className="task-title" onClick={() => markTaskCompleted(task.id)}>
              {task.title}
            </span>
            <button className="remove-btn" onClick={() => removeTask(task.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="task-summary">
        <p>Total tasks: {tasks.length}</p>
        <p>Completed tasks: {tasks.filter((task) => task.completed).length}</p>
      </div>
    </div>
  );
};

export default TodoList;
