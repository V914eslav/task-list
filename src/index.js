import React from "react";
import ReactDOM from "react-dom";

import AppHeader from "./AppHeader/AppHeader";
import SearchPanel from "./SearchPanel/SearchPanel";
import TodoList from "./TodoList/TodoList";

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
