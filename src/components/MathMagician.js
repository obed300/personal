import React from 'react';
import { FaExternalLinkAlt, FaReact } from 'react-icons/fa';
import styles from '../styles/Math.module.css';
import mathPic from '../img/math-mag.png';

const MathMagician = () => (
  <div className={styles.detailsContainer}>
    <div className={styles.detailsWrapp}>
      <img src={mathPic} alt="Math Magazine" className={styles.detailsWrapper} />
    </div>
    <div>
      <a href="https://math-magicians-obed.netlify.app/" className={styles.small}>
        live demo
        <span className={styles.demo}><FaExternalLinkAlt /></span>
      </a>
      <p className={styles.small}>Built With</p>
      <div className={styles.reacts}>
        React
        <span className={styles.react}><FaReact /></span>
      </div>
    </div>
  </div>
);

export default MathMagician;
