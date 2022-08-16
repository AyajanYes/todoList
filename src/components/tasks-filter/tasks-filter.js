import React from "react";
import PropTypes from "prop-types";

import './tasks-filter.css';

const TasksFilter = ({ filterType }) => {
  const selectedButton = (indexButton) => {
    const buttons = document.querySelectorAll('.filter-btn');
    const buttonArray = Array.from(buttons);
    buttonArray.map((item) => item.classList.remove('selected'));
    buttonArray[indexButton].classList.add('selected');
  };

  return (
    <ul className="filters">
      <li>
        <button
          className="filter-btn selected"
          onClick={() => {
            selectedButton(0);
            filterType('all');
          }}
        >
          All
        </button>
      </li>
      <li>
        <button
          className="filter-btn"
          onClick={() => {
            selectedButton(1);
            filterType('active');
          }}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className="filter-btn"
          onClick={() => {
            selectedButton(2);
            filterType('completed');
          }}
        >
          Completed
        </button>
      </li>
    </ul>
  );
};

TasksFilter.propTypes = {
  filterType: PropTypes.func.isRequired,
};

export default TasksFilter;
