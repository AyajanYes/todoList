import React, { Component } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from "prop-types";

import './task.css';

export default class Task extends Component {
  render() {
    const { label, time, done, onToggleDone, onToggleEdited, onDeleted } = this.props;
    const cretedTime = formatDistanceToNow(time);
    return (
      <div className="view">
        <input className="toggle" type="checkbox" checked={done} onChange={onToggleDone} />
        <label>
          <span className="description">{label}</span>
          <span className="created">created {cretedTime} ago</span>
        </label>
        <button className="icon icon-edit" onClick={onToggleEdited}></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
    );
  }
}

Task.defualtProps = {
  label: "",
  time: "",
  done: "false",
  onToggleDone: () => {},
  onToggleEdited: () => {},
  onDeleted: () => {},
};

Task.propTypes = {
  label: PropTypes.string,
  time: PropTypes.any,
  done: PropTypes.bool,
  onToggleDone: PropTypes.func,
  onToggleEdited: PropTypes.func,
  onDeleted: PropTypes.func,
};
