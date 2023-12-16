import React, { useState, useEffect } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import axios from 'axios';
import './Todo.css'

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [isFormShown, setFormDisplay] = useState(false);
  const [currentEdit, setCurrentEdit] = useState({});
  const [dropDown, setDropDown] = useState('');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users/1/todos')
      .then((data) => {
        setTodos(data.data);
      });
  }, []);

  useEffect(() => {
    const tempFiltered = todos.filter((todo) => {
      if (dropDown === 'complete') {
        return todo.completed;
      }
      if (dropDown === 'incomplete') {
        return !todo.completed;
      }
      if (dropDown === '') {
        return true;
      }
    });
    setFilteredTodos(tempFiltered);
  }, [dropDown, todos]);

  function displayForm() {
    setFormDisplay(true);
  }

  const addTodo = (title) => {
    setTodos((pre) => [
      ...pre,
      { title, completed: false, userId: 1, id: pre[pre.length - 1].id + 1 },
    ]);
  };

  const handleEdit = (item) => {
    setCurrentEdit(item);
    setFormDisplay(true);
  };

  const handleEditTodo = (newTitle) => {
    setTodos((pre) =>
      pre.map((todo) => {
        if (todo.id === currentEdit.id) {
          return { ...todo, title: newTitle };
        }
        return todo;
      })
    );
    setCurrentEdit({});
    setFormDisplay(false);
  };

  const deleteTodo = (id) => {
    setTodos((pre) => pre.filter((todo) => todo.id !== id));
  };

  const handleCheckbox = (id) => {
    setTodos((pre) =>
      pre.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleDropDown = (event) => {
    setDropDown(event.target.value);
  };

  return (
    <div>
      <AddTodo
        handleEditTodo={handleEditTodo}
        addTodo={addTodo}
        isFormShown={isFormShown}
        displayForm={displayForm}
        currentEdit={currentEdit}
      />
      <div className='drop-down'>
      <select onChange={handleDropDown} name={dropDown}>
        <option value="">Select</option>
        <option value="complete">Show Completed</option>
        <option value="incomplete">Show Incomplete</option>
      </select>
      </div>
      <TodoList
        list={filteredTodos}
        handleEdit={handleEdit}
        currentEdit={currentEdit.id}
        deleteTodo={deleteTodo}
        handleCheckbox={handleCheckbox}
      />
    </div>
  );
};

export default Todo;
