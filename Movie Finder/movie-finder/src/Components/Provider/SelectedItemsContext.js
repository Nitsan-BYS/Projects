// Create a context for managing selected items
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const SelectedItemsContext = createContext();

export function SelectedItemsProvider({ children }) {
   const [movies, setMovies] = useState([]);
   const [selectedItems, setSelectedItems] = useState([]);

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
      if (
         movies !== null &&
         Array.isArray(movies.results) &&
         movies.results.length > 0
      ) {
         const moviesImgs = movies.results.map((movie) => ({
            imageUrl: `http://image.tmdb.org/t/p/w500${movie.poster_path}`,
            imageName: movie.original_title,
            selected: false,
         }));

         setSelectedItems(moviesImgs);
      }
   }, [movies]);

   return (
      <SelectedItemsContext.Provider
         value={{ selectedItems, setSelectedItems }}
      >
         {children}
      </SelectedItemsContext.Provider>
   );
}

export function useSelectedItems() {
   return useContext(SelectedItemsContext);
}
