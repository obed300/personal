import React, { useState, useEffect } from 'react';
import pic from '../img/pic-of-me.jpeg';
import pic1 from '../img/pic-of-me2.jpeg';
import pic2 from '../img/pic-of-me3.jpeg';
import pic3 from '../img/pic-of-me4.jpeg';
import pic4 from '../img/pic-of-me5.jpeg';
import pic5 from '../img/pic-of-me6.jpeg';
import pic6 from '../img/pics 1.jpeg';
import pic7 from '../img/pics 2.jpeg';
import pic8 from '../img/pics 3.jpeg';
import pic9 from '../img/pics 4.jpeg';
import styles from '../styles/Imagerotate.module.css';

const images = [
  pic, pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9,
];

const Imagerotate = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className={styles.image}>
      <img src={images[currentImageIndex]} alt="Rotating" className={styles.picture} />
    </div>
  );
};

export default Imagerotate;
