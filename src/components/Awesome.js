import React from 'react';
import { FaExternalLinkAlt, FaHtml5 } from 'react-icons/fa';
import { TbBrandJavascript } from 'react-icons/tb';
import AwesomePic from '../img/awesome books.png';
import styles from '../styles/Stock.module.css';

const Awesome = () => (
  <div className={styles.detailsContainer}>
    <div className={styles.detailsWrapp}>
      <img src={AwesomePic} alt="Math Magazine" className={styles.detailsWrapper} />
    </div>
    <div>
      <a href="https://obed300.github.io/awesome-books1/" className={styles.small}>
        live demo
        <span className={styles.demo}><FaExternalLinkAlt /></span>
      </a>
      <p className={styles.small}>Built With</p>
      <div className={styles.reacts}>
        JavaScript
        <span className={styles.react}><TbBrandJavascript /></span>
      </div>
      <div className={styles.reacts}>
        HTML/CSS
        <span className={styles.react}><FaHtml5 /></span>
      </div>
    </div>
  </div>
);

export default Awesome;
