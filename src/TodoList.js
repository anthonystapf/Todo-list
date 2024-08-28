import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, onTaskChange, onRemoveTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          onChange={() => onTaskChange(index)}
          onRemove={() => onRemoveTask(index)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
