import React, { useState, useEffect } from 'react';
import pic from '../img/pic-of-me.jpeg';
import pic1 from '../img/pic-of-me2.jpeg';
import pic2 from '../img/pic-of-me3.jpeg';
import pic3 from '../img/pic-of-me4.jpeg';
import pic4 from '../img/pic-of-me5.jpeg';
import pic5 from '../img/pic-of-me6.jpeg';
import styles from '../styles/Imagerotate.module.css';

const images = [
  pic, pic1, pic2, pic3, pic4, pic5,
];

const Imagerotate = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 7000); // change image every 5 seconds

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className={styles.image}>
      <img src={images[currentImageIndex]} alt="Rotating" className={styles.picture} />
    </div>
  );
};

export default Imagerotate;
