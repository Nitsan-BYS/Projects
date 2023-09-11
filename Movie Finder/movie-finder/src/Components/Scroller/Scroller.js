import React, { useEffect, useState, useRef } from 'react';
import styles from './Scroller.module.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import images from './images';
import { useSelectedItems } from '../Provider/SelectedItemsContext';

const Scroller = () => {
   const [width, setWidth] = useState(0);
   const imagesArray = Object.values(images); //Convert object to array
   const { selectedItems, setSelectedItems } = useSelectedItems();

   // const [selectedItems, setSelectedItems] = useState(
   //    new Array(imagesArray.length).fill(false)
   // ); // Initialize selected states for each item

   const carousel = useRef();
   // const [ref, inView] = useInView();
   // const control = useAnimation();

   useEffect(() => {
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

   // Function to toggle the selected state for a specific item
   /*const toggleSelected = (index) => {
      const updatedSelectedItems = selectedItems.map((item, i) =>
         i === index ? !item : false
      ); // Toggle the selected state for the clicked item
      setSelectedItems(updatedSelectedItems); // Update selected states

      if (updatedSelectedItems[index]) {
         console.log(`Item at index ${index} is selected.`);
      } else {
         console.log(`Item at index ${index} is deselected.`);
      }
   };*/

   // Initialize selectedItems as an array of objects with the selected property
   // const initialSelectedItems = imagesArray.map((item) => ({
   //    ...item,
   //    selected: false,
   // }));

   // Function to toggle the selected state for a specific item
   const toggleSelected = (index) => {
      // Create a copy of the selected items array
      const updatedSelectedItems = [...selectedItems];

      // Toggle the selected state for the clicked item
      updatedSelectedItems[index].selected =
         !updatedSelectedItems[index].selected;

      // Update selected items state
      setSelectedItems(updatedSelectedItems);

      if (updatedSelectedItems[index].selected) {
         console.log(`Item at index ${index} is selected.`);
      } else {
         console.log(`Item at index ${index} is deselected.`);
      }
   };

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
                        <img alt='' src={image.src} />
                        <div className={styles.heart_box}>
                           <i
                              className={`fa-solid fa-heart ${
                                 selectedItems[index].selected
                                    ? styles.selected
                                    : styles.not_selected
                              }`}
                              onClick={(event) => {
                                 event.stopPropagation(); // Prevent event propagation (Conflict with the drag animation)
                                 toggleSelected(index); // Call the toggleSelected function with the index
                              }}
                           ></i>
                        </div>
                     </motion.div>
                  );
               })}
            </motion.div>
         </motion.div>
      </div>
   );
};

export default Scroller;
