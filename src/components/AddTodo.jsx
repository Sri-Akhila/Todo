import React, { useState } from 'react';
import TodoForm from './TodoForm';
import './AddTodo.css'

const AddTodo = ({ isFormShown, displayForm, addTodo, currentEdit, handleEditTodo }) => {
  return (
    <div className="add-todo">
      {isFormShown === false && (
        <button onClick={displayForm}>Add Todo</button>
      )}
      {isFormShown && (
        <TodoForm handleEditTodo={handleEditTodo} currentEdit={currentEdit} addTodo={addTodo}/>
      )}
    </div>
  );
};

export default AddTodo;
