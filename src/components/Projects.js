import React from 'react';
import styles from '../styles/projects.module.css';
import mathPic from '../img/math-mag.png';
import budjetPic from '../img/budjet pic.png';

const Projects = () => (
  <div className={styles.projectContainer}>
    <section className={styles.mathSection}>
      <img src={mathPic} alt="Math Magazine" className={styles.mathPic} />
      <p className={styles.projectTitle}>Math Magician</p>
      <p className={styles.projectAbout}>
        Is a website for all fans of mathematics. It is a Single Page App (SPA)
        that allows users to: Make simple calculations and also Read a random math-related quote
      </p>
    </section>
    <section className={styles.mathSection}>
      <img src={budjetPic} alt="Math Magazine" className={styles.mathPic} />
      <p className={styles.projectTitle}>Budjet App</p>
      <p className={styles.projectAbout}>
        Is a mobile web application where you can manage your budget: you
        have a list of transactions associated with a category,
        so that you can see how much money you spent and on what
      </p>
    </section>
  </div>
);

export default Projects;
