import React from "react";

import TodoListItem from "./TodoListItem";

import cn from "classnames";
import styles from "./TodoList.module.css";

const TodoList = ({ todoData, onDeleted, onToggleDone, onToggleImportant }) => {
  const elements = todoData.map(({ id, ...itemProps }) => {
    return (
      <li key={id} className={cn("list-group-item", styles.list)}>
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleImportant={() => onToggleImportant(id)}
        />
      </li>
    );
  });

  return <ul className={cn("list-group", styles["todo-list"])}>{elements}</ul>;
};

export default TodoList;
