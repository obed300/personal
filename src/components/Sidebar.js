import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../styles/Sidebar.module.css';

const Sidebar = ({ isSidebarOpen, handleToggleSidebar }) => (
  <div className={`${styles.sidebar} ${isSidebarOpen ? styles.showSidebar : ''}`}>
    <ul className={styles.sidebarNavLinks}>
      <li>
        <NavLink exact to="/" activeClassName={styles.active} onClick={handleToggleSidebar}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/projects" activeClassName={styles.active} onClick={handleToggleSidebar}>
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" activeClassName={styles.active} onClick={handleToggleSidebar}>
          Contact Me
        </NavLink>
      </li>
    </ul>
  </div>
);

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  handleToggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
