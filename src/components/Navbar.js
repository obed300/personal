import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import logo from '../img/logo.jpg';
import styles from '../styles/Navbar.module.css';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={styles.navContainer}>
      <nav className={styles.navbar}>
        <img src={logo} alt="My logo" className={styles.logo} />
        <ul className={`${styles.navLinks} ${isSidebarOpen ? styles.showSidebar : ''}`}>
          <li>
            <NavLink exact to="/" className={styles.active}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={styles.active}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={styles.active}>
              Contact Me
            </NavLink>
          </li>
        </ul>
        <button type="button" className={styles.hamMenu} onClick={handleToggleSidebar}>
          {isSidebarOpen ? (
            <MdClose className="close" />
          ) : (
            <GiHamburgerMenu className="menu" />
          )}
        </button>
      </nav>
      <Sidebar isSidebarOpen={isSidebarOpen} handleToggleSidebar={handleToggleSidebar} />
    </div>
  );
};

export default Navbar;
