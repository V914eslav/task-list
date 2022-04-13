import React, { Component } from "react";

import styles from "./ItemAddForm.module.css";
import cn from "classnames";

export default class ItemAddForm extends Component {
  render() {
    return (
      <div className={cn(styles["add-text"])}>
        <button
          type="submit"
          className={cn("btn", "btn-outline-secondary")}
          onClick={() => this.props.onAddItem("text 1")}
        >
          Add text
        </button>
      </div>
    );
  }
}
