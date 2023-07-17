import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

import logo from '../img/logo.jpg';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={styles.navContainer}>
      <nav className={styles.navbar}>
        <img src={logo} alt="My logo" className={styles.logo} />
        <button type="button" className={styles.hamMenu} onClick={handleToggleSidebar}>
          {isSidebarOpen ? (
            <MdClose className={`close ${styles.active}`} />
          ) : (
            <GiHamburgerMenu className="menu" />
          )}
        </button>
        <ul className={`${styles.sidebarNavLinks} ${isSidebarOpen ? styles.showSidebar : ''}`}>
          <li className={styles.active}>
            <NavLink exact to="/" className={styles.active}>
              Home
            </NavLink>
          </li>
          <li className={styles.active}>
            <NavLink to="/projects" className={styles.active}>
              Projects
            </NavLink>
          </li>
          <li className={styles.active}>
            <NavLink to="/contact" className={styles.active}>
              Contact Me
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
