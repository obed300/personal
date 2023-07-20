import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { DiRuby } from 'react-icons/di';
import OopPic from '../img/oop pic.png';
import styles from '../styles/Oop.module.css';

const Oop = () => (
  <div className={styles.detailsContainer}>
    <div className={styles.detailsWrapp}>
      <img src={OopPic} alt="Math Magazine" className={styles.detailsWrapper} />
    </div>
    <div>
      <a href="https://github.com/obed300/oop-school-library" className={styles.small}>
        <span className={styles.demo}><BsGithub /></span>
      </a>
      <div className={styles.text}>
        To access the instructions for operating this application, please
        click on the link above to be redirected to the corresponding GitHub README file
      </div>
      <p className={styles.small}>Built With</p>
      <div className={styles.reacts}>
        Ruby
        <span className={styles.react}><DiRuby /></span>
      </div>
    </div>
  </div>
);

export default Oop;
