import React from 'react';
import { MdForward } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';
import { GrLinkedinOption, GrFacebook } from 'react-icons/gr';
import { BsTwitter } from 'react-icons/bs';
import styles from '../styles/Home.module.css';
import Imagerotate from './Imagerotate';

const Home = () => (
  <div className={styles.homeWrapper}>
    <div className={styles.wrap}>
      <Imagerotate />
    </div>
    <p className={styles.info}>Hey I&apos;m a fullstack developer based in Ghana!</p>
    <div className={styles.name}>
      <h1>Obed Bamfo</h1>
      <p className={styles.text}>Full Stack Developer</p>
    </div>
    <section className={styles.about}>
      <h3 className={styles.subTitle}>About</h3>
      <p className={styles.text}>
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
      <div>
        <h3 className={styles.subTitle}>Search me on</h3>
        <ul>
          <li className={styles.media}>
            <a href="https://github.com/obed300">
              <AiFillGithub className={styles.social} />
              Gitbub
            </a>
          </li>
          <li className={styles.media}>
            <a href="https://www.linkedin.com/in/obedbamfo/">
              <GrLinkedinOption className={styles.social} />
              Linkedin
            </a>
          </li>
          <li className={styles.media}>
            <a href="https://twitter.com/bamfo_obed">
              <BsTwitter className={styles.social} />
              Twitter
            </a>
          </li>
          <li className={styles.media}>
            <a href="https://web.facebook.com/obed.bamfo.5">
              <GrFacebook className={styles.social} />
              Facebook
            </a>
          </li>
        </ul>

      </div>
      <a href="projects" className={styles.button}>
        {' '}
        My Portfolio
        {' '}
        {' '}
        <MdForward />
        {' '}
      </a>
    </section>
  </div>
);

export default Home;
