import React, { useState } from 'react';
import TodoList from './TodoList';
import TaskChart from './TaskChart';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  const handleTaskChange = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Adicione uma nova tarefa"
      />
      <button onClick={handleAddTask}>Adicionar Tarefa</button>
      <TodoList tasks={tasks} onTaskChange={handleTaskChange} onRemoveTask={handleRemoveTask} />
      <TaskChart tasks={tasks} />
    </div>
  );
};

export default App;

