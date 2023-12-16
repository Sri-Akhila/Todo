import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import './TodoItem.css';

const TodoItem = ({
  item,
  currentEdit,
  handleEdit,
  deleteTodo,
  handleCheckbox,
}) => {
  const [show, setShow] = useState(false);

  const handleMouseOver = (event) => {
    setShow(true);
  };

  const handleMouseOut = (event) => {
    setShow(false);
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className="card todo-item"
    >
      <div className="todo-content">
        <input
          onChange={() => handleCheckbox(item.id)}
          type="checkbox"
          checked={item.completed}
        />
        <p className={item.completed ? 'completed' : ''}>{item.title}</p>
      </div>
      <div className="">
        {(show || currentEdit == item.id) && (
          <EditIcon
            onClick={() => handleEdit(item)}
            sx={{ fontSize: 35 }}
            className="edit"
          />
        )}
        {show && currentEdit != item.id && (
          <DeleteTwoToneIcon
            onClick={() => deleteTodo(item.id)}
            sx={{ fontSize: 35 }}
            className="delete"
          />
        )}
      </div>
    </div>
  );
};

export default TodoItem;
