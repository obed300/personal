import React from 'react';
import { MdForward } from 'react-icons/md';
import pic from '../img/pic-of-me.jpeg';
import styles from '../styles/Home.module.css';

const Home = () => (
  <div className={styles.homeWrapper}>
    <div className={styles.wrap}>
      <img src={pic} alt="My logo" className={styles.picture} />
    </div>
    <p className={styles.info}>Hey I&apos;m a fullstack developer based in Ghana!</p>
    <div className={styles.name}>
      <h1>Obed Bamfo</h1>
      <p>Full Stack Developer</p>
    </div>
    <section className={styles.about}>
      <h3>About me</h3>
      <p>
        Hello, my name is Obed Bamfo and my ultimate goal is to use my skills in
        software engineering to make a positive impact for environmental organizations
        and solve real-world problems. My background in manual labor at a construction
        site for six years has instilled in me the value of hard work and determination.
        Additionally, my degree in Banking and Finance taught me discipline and the
        importance of staying committed to achieving my goals, which led to my
        current role as an insurance broker. I am currently enrolled in a remote
        software development program at Microverse, where I have been honing my skills
        by building various projects and working with developers from all over the world.
        Through my experience in remote development, I have gained valuable
        skills in communication and teamwork.
      </p>
      <button type="button" className={styles.button}>
        My Portfolio
        {' '}
        <MdForward />
      </button>
    </section>
  </div>
);

export default Home;
