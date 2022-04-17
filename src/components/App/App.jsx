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
    term: "",
    filterName: "all", // all,active, done
  };
  createTodoItem(label) {
    return { label, done: false, important: false, id: this.maxId++ };
  }

  onDeleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      // const before = todoData.slice(0, idx);
      // const after = todoData.slice(idx + 1, todoData.length - 1);
      // const after = todoData.slice(idx+1); две равные строки

      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArray,
      };
    });
  };
  onAddItem = (label) => {
    this.setState(({ todoData }) => {
      const newItem = this.createTodoItem(label);
      const newArray = [...todoData, newItem];
      return {
        todoData: newArray,
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);

    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }
  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done"),
      };
    });
  };
  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important"),
      };
    });
  };
  search(array, term) {
    if (term.length === 0) {
      return array;
    }

    return array.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }
  filter(array, filterName) {
    switch (filterName) {
      case "all":
        return array;
      case "active":
        return array.filter((item) => !item.done);
      case "done":
        return array.filter((item) => item.done);
      default:
        return array;
    }
  }

  onSearchChange = (term) => {
    this.setState({ term });
  };
  onFilterChange = (filterName) => {
    this.setState({ filterName });
  };
  render() {
    const { todoData, term, filterName } = this.state;
    const visibleItems = this.search(todoData, term);
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className={cn("todo-app", styles.app)}>
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            filter={filterName}
            onFilterChange={this.onFilterChange}
          />
        </div>

        <TodoList
          todoData={visibleItems}
          onDeleted={this.onDeleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <ItemAddForm onAddItem={this.onAddItem} />
      </div>
    );
  }
}
