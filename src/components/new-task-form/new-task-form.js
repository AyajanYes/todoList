import React, { Component } from "react";
import PropTypes from "prop-types";

import './new-task-form.css';

export default class NewTaskForm extends Component {
  state = {
    label: '',
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    if (e.keyCode === 13) {
      this.props.addItem(this.state.label);
      this.setState({
        label: '',
      });
    }
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo"
               placeholder="What needs to be done?"
               onChange={ this.onLabelChange }
               onKeyDown={ this.onSubmit }
               value={ this.state.label }/>
      </header>
    );
  }
}

NewTaskForm.defualtProps = {
  addItem: () => {},
};

NewTaskForm.PropTypes = {
  addItem: PropTypes.func,
};
