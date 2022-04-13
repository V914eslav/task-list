import React, { Component } from "react";

import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";
import ItemStatusFilter from "../ItemStatusFilter";

import cn from "classnames";
import styles from "./App.module.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todoData: [
        { label: "Drink Coffee", important: false, id: 1 },
        { label: "Make Awesome App", important: true, id: 2 },
        { label: "Have a lunch", important: false, id: 3 },
      ],
    };
    this.onDeleteItem = (id) => {
      this.setState(({ todoData }) => {
        const idx = todoData.findIndex((el) => el.id === id);

        const before = todoData.slice(0, idx);
        const after = todoData.slice(idx, todoData.length - 1);
        // const after = todoData.slice(idx+1); две равные строки

        const newArray = [...before, ...after];
        return {
          todoData: newArray,
        };
      });
    };
  }

  render() {
    return (
      <div className={cn("todo-app", styles.app)}>
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todoData={this.state.todoData}
          onDeleted={this.onDeleteItem}
        />
      </div>
    );
  }
}
