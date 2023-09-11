import React from 'react';
import styles from './Browse.module.css';
import DefaultComponent from '../DefaultComp/DefaultComponent';
import Box from '@mui/joy/Box';
import images from '../Scroller/images';

const Browse = () => {
   const imagesArray = Object.values(images); //Conver object to array

   return (
      <>
         <DefaultComponent />
         <Box
            sx={{
               width: '75%',
               // border: '2px solid white',
               minHeight: '30vh',
               marginTop: '3%',
               marginLeft: '16%',
               display: 'flex',
               flexWrap: 'wrap',
            }}
         >
            {imagesArray.map((image, index) => {
               return (
                  <div key={index} className={styles.item}>
                     <img alt='' src={image.src} />
                     <div className={styles.heart_box}>
                        {/* <i
                              className={`fa-solid fa-heart ${
                                 selectedItems[index]
                                    ? styles.selected
                                    : styles.not_selected
                              }`}
                              onClick={(event) => {
                                 event.stopPropagation(); // Prevent event propagation (Conflict with the drag animation)
                                 toggleSelected(index); // Call the toggleSelected function with the index
                              }}
                           ></i> */}
                     </div>
                  </div>
               );
            })}
         </Box>
      </>
   );
};

export default Browse;
