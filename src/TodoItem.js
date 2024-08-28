import React from 'react';

const TodoItem = ({ task, onChange, onRemove }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={onChange}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={onRemove}>Remover</button>
    </li>
  );
};

export default TodoItem;
