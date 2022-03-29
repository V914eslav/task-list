import React from "react";

import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";

import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

export default App;
