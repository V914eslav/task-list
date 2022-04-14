import React, { Component } from "react";

import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";
import ItemAddForm from "../ItemAddForm";
import ItemStatusFilter from "../ItemStatusFilter";

import cn from "classnames";
import styles from "./App.module.css";

export default class App extends Component {
  maxId = 100;
  state = {
    todoData: [
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Make Awesome App"),
      this.createTodoItem("Have a lunch"),
    ],
  };
  createTodoItem(label) {
    return { label, important: false, done: false, id: this.maxId++ };
  }
  onDeleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      // const before = todoData.slice(0, idx);
      // const after = todoData.slice(idx + 1, todoData.length - 1);
      // const after = todoData.slice(idx+1); две равные строки

      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1, todoData.length),
      ];
      return {
        todoData: newArray,
      };
    });
  };
  onAddItem = (text) => {
    this.setState(({ todoData }) => {
      const newItem = this.createTodoItem(text);
      const newArray = [...todoData, newItem];
      return {
        todoData: newArray,
      };
    });
  };
  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const oldItem = todoData[idx];
      const newItem = { ...oldItem, done: !oldItem.done };

      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1, todoData.length),
      ];
      console.log(id);
      console.log(oldItem);
      console.log(newItem);
      console.log(newArray);
      return {
        todoData: newArray,
      };
    });
  };
  onToggleImportant = (id) => {
    console.log("Important", id);
  };

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
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <ItemAddForm onAddItem={this.onAddItem} />
      </div>
    );
  }
}
