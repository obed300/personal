import React from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../img/logo.jpg';
import styles from '../styles/Navbar.module.css';

const Navbar = () => (
  <div className={styles.navContainer}>
    <nav className={styles.navbar}>
      <img src={logo} alt="My logo" className={styles.logo} />
      <ul className={styles.navLinks}>
        <li>
          <NavLink to="/" className={styles.active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={styles.active}>
            Projects
          </NavLink>
        </li>
      </ul>
      <a href="/" className="hamMenu">
        <GiHamburgerMenu className="menu" />
      </a>

    </nav>

  </div>
);

export default Navbar;
