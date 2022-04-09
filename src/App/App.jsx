import React from "react";

import AppHeader from "../components/AppHeader/AppHeader";
import SearchPanel from "../components/SearchPanel/SearchPanel";
import TodoList from "../components/TodoList/TodoList";

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
