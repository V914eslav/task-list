import React from "react";

import cn from "classnames";
import styles from "./SearchPanel.module.css";

const SearchPanel = () => {
  return (
    <input
      type="text"
      className={cn("form-control", styles["search-input"])}
      placeholder="type to search"
    />
  );
};
export default SearchPanel;
