import React from 'react';
import { FaExternalLinkAlt, FaReact } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import stockPic from '../img/stock 1.png';
import styles from '../styles/Stock.module.css';

const Stock = () => (
  <div className={styles.detailsContainer}>
    <div className={styles.detailsWrapp}>
      <img src={stockPic} alt="Math Magazine" className={styles.detailsWrapper} />
    </div>
    <div>
      <a href="https://delightful-gingersnap-a35226.netlify.app/" className={styles.small}>
        live demo
        <span className={styles.demo}><FaExternalLinkAlt /></span>
      </a>
      <p className={styles.small}>Built With</p>
      <div className={styles.reacts}>
        React
        <span className={styles.react}><FaReact /></span>
      </div>
      <div className={styles.reacts}>
        Redux
        <span className={styles.react}><SiRedux /></span>
      </div>
    </div>
  </div>
);

export default Stock;
