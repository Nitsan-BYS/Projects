import React from 'react';
import styles from './Browse.module.css';
import DefaultComponent from '../DefaultComp/DefaultComponent';
import Box from '@mui/joy/Box';
import { useLocation } from 'react-router-dom';
import useMoviesData from './useMoviesData';

const Browse = () => {
   const location = useLocation();
   const searchParams = new URLSearchParams(location.search);
   const query = searchParams.get('query') || ''; // Default to an empty string if query is not present

   const { movies, filteredMovies } = useMoviesData(query);

   return (
      <>
         <DefaultComponent />
         <Box
            sx={{
               width: '75%',
               minHeight: '30vh',
               marginTop: '3%',
               marginLeft: '16%',
               display: 'flex',
               flexWrap: 'wrap',
            }}
         >
            {filteredMovies.length > 0 ? (
               filteredMovies.map((movie, index) => (
                  <div key={index} className={styles.item}>
                     <img alt={movie.title} src={movie.imageUrl} />
                  </div>
               ))
            ) : (
               <span className={styles.not_found}>
                  No movies found for the query.
               </span>
            )}
         </Box>
      </>
   );
};

export default Browse;
