import React, { Component } from "react";

import NewTaskForm from "../new-task-form";
import TaskList from "../task-list/task-list";
import Footer from "../footer";
import './app.css';

export default class App extends Component {
  idStart = 100;

  state = {
    todoData: [
      this.createTodoItem('Completed task'),
      this.createTodoItem('Editing task'),
      this.createTodoItem('Active task'),
    ],
    filter: 'all',
  };

  filterType = (vision) => {
    this.setState({ filter: vision });
  };

  createTodoItem(label) {
    return {
      label,
      time: new Date(),
      done: false,
      edit: false,
      id: this.idStart++,
    };
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1),
      ];

      return {
        todoData: newArray,
      };
    });
  };

  deleteCompletedItems = () => {
    this.setState(({ todoData }) => {
      const newArray = todoData.filter((item) => !item.done);

      return {
        todoData: newArray,
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];

      return {
        todoData: newArray,
      };
    });
  };

  editItem = (id, text) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const oldItem = todoData[idx];
      const newItem = { ...oldItem };
      newItem.label = text;
      newItem.edit = false;

      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1),
      ];

      return {
        todoData: newArray,
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);

    const oldItem = arr[idx];
    const newItem = { ...oldItem,
      [propName]: !oldItem[propName] };

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1),
    ];
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done'),
      };
    });
  };

  onToggleEdited = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'edit'),
      };
    });
  };

  render() {
    const { todoData } = this.state;
    const doneItems = todoData.filter((item) => item.done).length;
    const incompleteItems = todoData.length - doneItems;

    return (
      <section className="todoapp">
        <NewTaskForm
          addItem={ this.addItem }/>
        <section className="main">
          <TaskList
            todos={ todoData }
            filter={this.state.filter}
            onToggleDone={ this.onToggleDone }
            onToggleEdited={ this.onToggleEdited }
            editItem={ (id, text) => this.editItem(id, text) }
            onDeleted={ this.deleteItem }/>
          <Footer
            activeCount={incompleteItems}
            filterType={(type) => this.filterType(type)}
            deleteCompletedItems={ this.deleteCompletedItems }/>
        </section>
      </section>
    );
  }
}
