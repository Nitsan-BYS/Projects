import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import styles from './Home.module.css';

const MainScroller = () => {
   const [innerHeight, setInnerHeight] = useState(window.innerHeight);
   const [currentImageIndex, setCurrentImageIndex] = useState(0);
   const [movies, setMovies] = useState([]);
   const [imagesArray, setImages] = useState([]);
   const currentImageIndexRef = useRef(0);

   useEffect(() => {
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
      const handleResize = () => {
         setInnerHeight(window.innerHeight);
      };

      const interval = setInterval(() => {
         currentImageIndexRef.current =
            (currentImageIndexRef.current + 1) % imagesArray.length;
         // Update the currentImageIndex to trigger re-render
         setCurrentImageIndex(currentImageIndexRef.current);
      }, 5000); // Change image every 5 seconds

      window.addEventListener('resize', handleResize);
      return () => {
         clearInterval(interval);
         window.removeEventListener('resize', handleResize);
      };
   }, [imagesArray]);

   useEffect(() => {
      if (
         movies !== null &&
         Array.isArray(movies.results) &&
         movies.results.length > 0
      ) {
         const moviesImgs = movies.results.map((movie) => ({
            imageUrl: `http://image.tmdb.org/t/p/w500${movie.poster_path}`,
            imageName: movie.original_title,
         }));
         setImages(moviesImgs);
      }
   }, [movies]);

   return (
      <div className={styles.images_scroller}>
         <AnimatePresence mode='wait'>
            <motion.div
               key={currentImageIndex}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{
                  duration: 0.25, // Transition duration when changing images
                  ease: 'linear',
               }}
            >
               {/* '?.' checks if the element is undefined or null */}
               <img
                  src={imagesArray[currentImageIndex]?.imageUrl}
                  alt={imagesArray[currentImageIndex]?.imageName}
               />
            </motion.div>
         </AnimatePresence>
      </div>
   );
};

export default MainScroller;
