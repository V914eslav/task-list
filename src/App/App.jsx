import React from "react";

import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";

const App = () => {
  return (
    <>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </>
  );
};

export default App;
