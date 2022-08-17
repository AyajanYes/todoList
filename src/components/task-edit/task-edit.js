import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TaskEdit extends Component {
  state = {
    label: this.props.itemText,
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    if (e.keyCode === 13) {
      this.props.editItem(this.props.itemId, this.state.label);
      this.setState({
        label: '',
      });
    }
  };

  render() {
    return (
      <input type="text" className="edit"
              placeholder="Editing task"
              onChange={ this.onLabelChange }
              onKeyDown={ this.onSubmit }
              value={ this.state.label }/>
    );
  }
}

TaskEdit.defualtProps = {
  editItem: () => {},
};

TaskEdit.propTypes = {
  itemId: PropTypes.number.isRequired,
  itemText: PropTypes.string.isRequired,
  editItem: PropTypes.func,
};
