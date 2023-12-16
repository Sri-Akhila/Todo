import React, { useState, useEffect } from 'react';
import './TodoForm.css';

const TodoForm = ({ addTodo, currentEdit, handleEditTodo }) => {
  const [enteredTitle, setEnteredTitle] = useState('');

  useEffect(() => {
    if (currentEdit.id) {
      setEnteredTitle(currentEdit.title);
    }
  }, [currentEdit]);

  const handleAddTodo = () => {
    if (enteredTitle) {
      addTodo(enteredTitle);
      setEnteredTitle('');
    }
  };

  return (
    <div className="add-todo__control">
      <input
        value={enteredTitle}
        type="text"
        onChange={(e) => setEnteredTitle(e.target.value)}
      />
      {currentEdit.id ? (
        <button onClick={()=>handleEditTodo(enteredTitle)}>Edit Todo</button>
      ) : (
        <button onClick={handleAddTodo}>Add Todo</button>
      )}
    </div>
  );
};

export default TodoForm;
