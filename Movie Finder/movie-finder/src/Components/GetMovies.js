import { useEffect, useState } from 'react';
import axios from 'axios';
import Sheet from '@mui/joy/Sheet';

const GetMovies = () => {
   const [movies, setMovies] = useState([]);

   useEffect(() => {
      const getMovies = async () => {
         try {
            const result = await axios.get('http://localhost:3001/api/movies');
            if (result !== undefined) {
               setMovies(result.data);
            } else {
               console.log('Could not fetch movies from DB.');
            }
         } catch (e) {
            console.log(e);
         }
      };
      getMovies();
   }, []);

   return (
      <Sheet
         variant='plain'
         sx={{
            width: 800,
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            justifyContent: 'center',
            backgroundColor: 'transparent',
            border: '2px solid white',
         }}
      >
         {movies.map((movie, index) => (
            <div key={index}>
               <h4>{movie.name}</h4>
               <p>Genre: {movie.genre}</p>
               <p>Description: {movie.description}</p>
               <p>Date: {movie.date}</p>
            </div>
         ))}
      </Sheet>
   );
};

export default GetMovies;
