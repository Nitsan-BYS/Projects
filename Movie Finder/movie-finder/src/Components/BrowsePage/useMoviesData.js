import { useEffect, useState } from 'react';
import axios from 'axios';

const useMoviesData = (query) => {
   const [movies, setMovies] = useState([]);
   const [filteredMovies, setFilteredMovies] = useState([]);

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
            setMovies(response.data.results);
         } catch (err) {
            console.log(err);
         }
      };
      getMoviesData();
   }, []);

   useEffect(() => {
      const getData = () => {
         if (Array.isArray(movies) && movies !== null && movies.length > 0) {
            const filtered = movies.filter((movie) =>
               movie.title.toLowerCase().includes(query.toLowerCase())
            );
            const filteredData = filtered.map((movie) => ({
               imageUrl: `http://image.tmdb.org/t/p/w500${movie.poster_path}`,
               imageName: movie.title,
            }));
            setFilteredMovies(filteredData);
         }
      };
      getData();
   }, [movies, query]);

   return { movies, filteredMovies };
};

export default useMoviesData;
