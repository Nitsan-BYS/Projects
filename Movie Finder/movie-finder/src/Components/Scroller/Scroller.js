import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import styles from './Scroller.module.css';
import { motion } from 'framer-motion';
import { useSelectedItems } from '../Provider/SelectedItemsContext';

const Scroller = () => {
   const [width, setWidth] = useState(0);
   const [movies, setMovies] = useState([]);
   const [moviesImages, setMoviesImages] = useState([]);
   const { selectedItems, setSelectedItems } = useSelectedItems();

   const carousel = useRef();

   useEffect(() => {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth); //sets the max width needed for carousel

      const getMoviesData = async () => {
         try {
            const response = await axios.get(
               `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`,
               {
                  headers: {
                     accept: 'application/json',
                  },
               }
            );
            setMovies(response.data);
         } catch (err) {
            console.log(err);
         }
      };
      getMoviesData();
   }, []);

   useEffect(() => {
      // Check if movies is an object with a 'd' property that is an array and not empty before mapping
      if (
         movies !== null &&
         Array.isArray(movies.results) &&
         movies.results.length > 0
      ) {
         const moviesImgs = movies.results.map((movie) => ({
            imageUrl: `http://image.tmdb.org/t/p/w500${movie.poster_path}`,
            imageName: movie.original_title,
         }));
         setMoviesImages(moviesImgs);
      }
   }, [movies]);

   // Function to toggle the selected state for a specific item
   const toggleSelected = (index) => {
      if (selectedItems.length > 0 && selectedItems[index]) {
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
      }
   };

   const addToWatchlist = (event, index, imgName) => {
      console.log(index);
      event.stopPropagation(); // Prevent event propagation (Conflict with the drag animation)
      toggleSelected(index);

      // const data = {
      //    movie_id: 3,
      //    name: 'movie',
      //    genre: 'Comedy',
      //    description: 'TEST',
      //    date: Date.now(),
      // };
      // axios
      //    .post('http://localhost:3001/api/movies/add-movie', data)
      //    .then((response) => {
      //       console.log(response.status);
      //    });
   };

   return (
      <div className={styles.main_carousel}>
         <motion.div
            ref={carousel}
            className={styles.carousel}
            whileTap={{ cursor: 'grabbing' }}
         >
            <motion.div
               drag='x'
               dragConstraints={{ right: 0, left: -width }}
               className={styles.inner_carousel}
            >
               {moviesImages.map((image, index) => {
                  return (
                     <motion.div key={index} className={styles.item}>
                        <img alt='' src={image.imageUrl} />
                        <div className={styles.heart_box}>
                           <span className={styles.image_title}>
                              {image.imageName}
                           </span>
                           <i
                              className={`fa-solid fa-heart ${
                                 selectedItems[index] &&
                                 selectedItems[index].selected
                                    ? styles.selected
                                    : styles.not_selected
                              }`}
                              onClick={(event) =>
                                 addToWatchlist(event, index, image.imageName)
                              }
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
