import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ list, currentEdit ,handleEdit, deleteTodo, handleCheckbox }) => {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    const temp = [...list];
    temp.sort((a, b) => b.id - a.id);
    setTodoList(temp);
  }, [list]);

  return (
    <div className="card todo-list">
      {todoList.map((item, key) => (
        <TodoItem handleCheckbox={handleCheckbox} deleteTodo={deleteTodo} handleEdit={handleEdit} currentEdit={currentEdit} item={item} key={key} />
      ))}
    </div>
  );
};

export default TodoList;
