import React from "react";

import TodoListItem from "./TodoListItem/TodoListItem";

const TodoList = ({ todoData }) => {
  const elements = todoData.map((item) => {
    return (
      <li key={item.label}>
        <TodoListItem {...item} />
      </li>
    );
  });

  return <ul className="list">{elements}</ul>;
};

export default TodoList;
