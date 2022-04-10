import React from "react";

import AppHeader from "../components/AppHeader/AppHeader";
import SearchPanel from "../components/SearchPanel/SearchPanel";
import TodoList from "../components/TodoList/TodoList";

import styles from "./App.module.css";

const todoData = [
  { label: "Drink Coffee", important: false },
  { label: "Make Awesome App", important: true },
  { label: "Have a lunch", important: false },
];

const App = () => {
  return (
    <div className={styles.app}>
      <AppHeader />
      <SearchPanel />
      <TodoList todoData={todoData} />
    </div>
  );
};

export default App;
