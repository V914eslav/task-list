import React from "react";

const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? "tomato" : "black",
  };
  return (
    <span style={style} className="list-item">
      {label}
    </span>
  );
};

export default TodoListItem;
