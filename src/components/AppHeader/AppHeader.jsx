import React from "react";

import cn from "classnames";
import styles from "./AppHeader.module.css";

const AppHeader = ({ toDo, done }) => {
  return (
    <div className={cn("d-flex", styles["app-header"])}>
      <h1>Todo List</h1>
      <h2>
        {toDo} more to do, {done} done
      </h2>
    </div>
  );
};
export default AppHeader;
