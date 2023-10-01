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
               `https://imdb8.p.rapidapi.com/auto-complete?q=game`,
               {
                  headers: {
                     'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                     'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
                  },
               }
            );
            setMovies(response.data);
            console.log(response.data);
         } catch (err) {
            console.log(err);
         }
      };
      getMoviesData();
   }, []);

   useEffect(() => {
      // Check if movies is an object with a 'd' property that is an array and not empty before mapping
      if (movies !== null && Array.isArray(movies.d) && movies.d.length > 0) {
         const moviesImgs = movies.d.map((movie) => ({
            imageUrl: movie.i.imageUrl,
            imageName: movie.l,
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
