import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { SiRubyonrails, SiPostgresql } from 'react-icons/si';

import budjetPic from '../img/budjeting.png';
import styles from '../styles/Budget.module.css';

const Budjet = () => (
  <div className={styles.detailsContainer}>
    <div className={styles.detailsWrapp}>
      <img src={budjetPic} alt="Math Magazine" className={styles.detailsWrapper} />
    </div>
    <div>
      <a href="https://ob-pk09.onrender.com/" className={styles.small}>
        live demo
        <span className={styles.demo}><FaExternalLinkAlt /></span>
      </a>
      <p className={styles.small}>Built With</p>
      <div className={styles.reacts}>
        Ruby on Rails
        <span className={styles.react}><SiRubyonrails /></span>
      </div>
      <div className={styles.reacts}>
        PostgreSQL
        <span className={styles.react}><SiPostgresql /></span>
      </div>
      <div className={styles.reacts}>
        RSpec Rails
      </div>
      <p className={styles.reacts}>
        Devise
      </p>
      <p className={styles.reacts}>
        CanCanCan
      </p>
    </div>
  </div>
);

export default Budjet;
