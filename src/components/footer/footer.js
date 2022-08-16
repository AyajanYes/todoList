import React from "react";
import PropTypes from "prop-types";

import TasksFilter from "../tasks-filter";
import "./footer.css";

const Footer = ({ activeCount, filterType, deleteCompletedItems }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{activeCount} items left</span>
      <TasksFilter filterType={(type) => filterType(type)} />
      <button className="clear-completed" onClick={deleteCompletedItems}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.defualtProps = {
  activeCount: 0,
  deleteCompletedItems: () => {},
};

Footer.propTypes = {
  activeCount: PropTypes.number,
  filterType: PropTypes.func.isRequired,
  deleteCompletedItems: PropTypes.func,
};

export default Footer;
