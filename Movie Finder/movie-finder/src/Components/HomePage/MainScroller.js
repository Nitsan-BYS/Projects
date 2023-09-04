import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import pic1 from './imgs/pexels_1.jpg';
import pic2 from './imgs/pexels_2.jpg';
import styles from './Home.module.css';

const images = [
   { id: 1, src: pic1 },
   { id: 2, src: pic2 },
];

const MainScroller = () => {
   const [innerHeight, setInnerHeight] = useState(window.innerHeight);
   const [currentImageIndex, setCurrentImageIndex] = useState(0);

   useEffect(() => {
      const handleResize = () => {
         setInnerHeight(window.innerHeight);
      };

      const interval = setInterval(() => {
         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change image every 5 seconds

      window.addEventListener('resize', handleResize);
      return () => {
         clearInterval(interval);
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   return (
      <div className={styles.images_scroller}>
         <AnimatePresence mode='wait' initial={false}>
            <motion.div
               key={images[currentImageIndex].id}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{
                  duration: 0.25, // Transition duration when changing images
                  ease: 'linear',
               }}
            >
               <img src={images[currentImageIndex].src} alt='image' />
            </motion.div>
         </AnimatePresence>
      </div>
   );
};

export default MainScroller;
