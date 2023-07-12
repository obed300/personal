import React from 'react';
import styles from '../styles/projects.module.css';
import mathPic from '../img/math-mag.png';
import budjetPic from '../img/budjet pic.png';
import stockPic from '../img/Stock listening.png';
import spacePic from '../img/space_hub.png';

const Projects = () => (
  <div className={styles.projectContainer}>
    <a href="math" className={styles.link}>
      <section className={styles.mathSection}>
        <img src={mathPic} alt="Math Magazine" className={styles.mathPic} />
        <p className={styles.projectTitle}>Math Magician</p>
        <p className={styles.projectAbout}>
          Is a website for all fans of mathematics. It is a Single Page App (SPA)
          that allows users to: Make simple calculations and also Read a random math-related quote
        </p>
      </section>
    </a>
    <a href="budget" className={styles.link}>
      <section className={styles.mathSection}>
        <img src={budjetPic} alt="Math Magazine" className={styles.mathPic} />
        <p className={styles.projectTitle}>Budjet App</p>
        <p className={styles.projectAbout}>
          Is a mobile web application where you can manage your budget: you
          have a list of transactions associated with a category,
          so that you can see how much money you spent and on what
        </p>
      </section>
    </a>
    <a href="stock" className={styles.link}>
      <section className={styles.mathSection}>
        <img src={stockPic} alt="Math Magazine" className={styles.mathPic} />
        <p className={styles.projectTitle}>Stock Listening</p>
        <p className={styles.projectAbout}>
          is a web application that displays the list of companies on
          the NASDAQ stock exchange and allow users to search for companies and sort the
          list by different criteria, such as name and symbol. Also, when the user clicks
          (or taps) on a category item, the application navigates to the details page.
        </p>
      </section>
    </a>
    <a href="space" className={styles.link}>
      <section className={styles.mathSection}>
        <img src={spacePic} alt="Math Magazine" className={styles.mathPic} />
        <p className={styles.projectTitle}>Space Travelers Hub</p>
        <p className={styles.projectAbout}>
          is a web application for a company that provides commercial and scientific space travel
          services. The application will allow users to book rockets and join selected space
          missions..
        </p>
      </section>
    </a>
  </div>
);

export default Projects;
