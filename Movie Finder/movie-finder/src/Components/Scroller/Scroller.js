import React, { useEffect, useState, useRef } from 'react';
import styles from './Scroller.module.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import images from './images';

const Scroller = () => {
   const [width, setWidth] = useState(0);
   // const [ref, inView] = useInView();
   // const control = useAnimation();
   const carousel = useRef();
   const imagesArray = Object.values(images); //Conver object to array

   useEffect(() => {
      // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth); //sets the max width needed for carousel
   }, []);

   // useEffect(() => {
   //    if (inView) {
   //       control.start('visible');
   //    } else {
   //       control.start('hidden');
   //    }
   // }, [control, inView]);

   // const boxVariant = {
   //    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
   //    hidden: { opacity: 0, scale: 0 },
   // };

   // const scrollCarousel = (direction) => {
   //    const scrollAmount = direction === 'left' ? -300 : 300; // Adjust the scroll amount as needed
   //    carousel.current.scrollLeft += scrollAmount;
   // };

   return (
      <div className={styles.main_carousel}>
         <motion.div
            ref={carousel}
            className={styles.carousel}
            whileTap={{ cursor: 'grabbing' }}
         >
            <motion.div
               //
               // ref={ref}
               // variants={boxVariant}
               // initial='hidden' //since we're using variants we don't have to explicitly defined these properties
               // animate={control}
               //
               drag='x'
               dragConstraints={{ right: 0, left: -width }}
               className={styles.inner_carousel}
            >
               {imagesArray.map((image, index) => {
                  return (
                     <motion.div key={index} className={styles.item}>
                        <h2 style={{ color: 'gray', textAlign: 'center' }}>
                           Movie #
                        </h2>
                        <img alt='' src={image} />
                     </motion.div>
                  );
               })}
            </motion.div>
         </motion.div>
         {/* Arrow Buttons */}
         {/* <div className={styles.arrow_container}>
            <div
               className={styles.arrow_left}
               onClick={() => scrollCarousel('left')}
            >
               <i className='fa-solid fa-arrow-left'></i>
            </div>
            <div
               className={styles.arrow_right}
               onClick={() => scrollCarousel('right')}
            >
               <i className='fa-solid fa-arrow-right'></i>
            </div>
         </div> */}
      </div>
   );
};

export default Scroller;
