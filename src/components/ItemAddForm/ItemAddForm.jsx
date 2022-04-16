import React, { Component } from "react";

import styles from "./ItemAddForm.module.css";
import cn from "classnames";

export default class ItemAddForm extends Component {
  state = {
    label: "",
  };
  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.label);
  };
  render() {
    return (
      <form
        className={cn("d-flex", "item-add-form", styles["item-add"])}
        onSubmit={this.onSubmit}
      >
        <input
          type="text"
          className="form-conrtol"
          placeholder="We needs to be done"
          onChange={this.onLabelChange}
        />
        <button type="submit" className={cn("btn", "btn-outline-secondary")}>
          Add text
        </button>
      </form>
    );
  }
}
