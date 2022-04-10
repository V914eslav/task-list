import React from "react";

import AppHeader from "../components/AppHeader";
import SearchPanel from "../components/SearchPanel";
import TodoList from "../components/TodoList";
import ItemStatusFilter from "../components/ItemStatusFilter";

import cn from "classnames";
import styles from "./App.module.css";

const todoData = [
  { label: "Drink Coffee", important: false, id: 1 },
  { label: "Make Awesome App", important: true, id: 2 },
  { label: "Have a lunch", important: false, id: 3 },
];

const App = () => {
  return (
    <div className={cn("todo-app", styles.app)}>
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todoData={todoData} />
    </div>
  );
};

export default App;
