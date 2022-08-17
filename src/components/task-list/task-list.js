/* eslint-disable no-trailing-spaces */
import React from "react";
import { PropTypes } from "prop-types";

import Task from '../task';
import TaskEdit from "../task-edit/task-edit";
import './task-list.css';

const TaskList = ({
  todos,
  filter,
  onToggleDone,
  onToggleEdited,
  editItem,
  onDeleted,
}) => {
  let filteredTodo = todos;
  if (filter === "active") {
    filteredTodo = todos.filter((item) => !item.done);
  }

  if (filter === 'completed') {
    filteredTodo = todos.filter((item) => item.done);
  }

  const todoItems = filteredTodo.map((item) => {
    const { label, time, id, done, edit } = item;

    let className;
    if (done) {
      className = 'completed';
    }

    if (edit) {
      className = 'editing';
    }

    return (
      <li key={id} className={className}>
        <Task
          label={label}
          time={time}
          done={done}
          onToggleDone={() => onToggleDone(id)}
          onToggleEdited={() => onToggleEdited(id)}
          onDeleted={() => onDeleted(id)}
        />
        <TaskEdit itemId={id} 
                  itemText={label} 
                  editItem={(idx, text) => editItem(idx, text)} />
      </li>
    );
  });

  return <ul className="todo-list">{todoItems}</ul>;
};

TaskList.defualtProps = {
  todos: [],
  filter: 'all',
  onToggleDone: () => {},
  onToggleEdited: () => {},
  editItem: () => {},
  onDeleted: () => {},
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      time: PropTypes.any,
      done: PropTypes.bool,
      edit: PropTypes.bool,
      id: PropTypes.number,
    }),
  ),
  filter: PropTypes.string,
  onToggleDone: PropTypes.func,
  onToggleEdited: PropTypes.func,
  editItem: PropTypes.func,
  onDeleted: PropTypes.func,
};

export default TaskList;
