import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; // Import search icon
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const SearchBar = ({ onSearch, initialQuery = '' }) => {
   const location = useLocation();
   const navigate = useNavigate();
   const [submittedQuery, setSubmittedQuery] = useState({
      query: initialQuery,
      list: [],
      submitted: false,
   });

   const handleQueryChange = (e) => {
      // Update the query without immediately filtering
      setSubmittedQuery({
         ...submittedQuery,
         query: e.target.value,
      });
   };

   const searchMoviesByName = async (movieName) => {
      try {
         const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${
               process.env.REACT_APP_API_KEY
            }&query=${encodeURIComponent(movieName)}`,
            {
               headers: {
                  accept: 'application/json',
               },
            }
         );
         return response.data.results;
      } catch (error) {
         console.error('Error fetching data:', error);
         return [];
      }
   };

   const getFilteredMovies = () => {
      const searchParams = new URLSearchParams(location.search);
      const query = searchParams.get('query') || '';
   };

   const search = async () => {
      const query = submittedQuery.query.trim();

      if (!query) return;

      const results = await searchMoviesByName(query);

      setSubmittedQuery({
         ...submittedQuery,
         list: results,
         submitted: true,
      });

      navigate(`/browse?query=${encodeURIComponent(query)}`);
   };

   // Call the search function when the search icon is clicked
   const handleSearchIconClick = () => {
      search();
   };

   // Call the search function when 'Enter' key is pressed
   const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
         search();
      }
   };

   return (
      <div className={styles.search_bar}>
         <FontAwesomeIcon
            icon={faMagnifyingGlass}
            color='grey'
            className={styles.search_icon}
            onClick={handleSearchIconClick}
         />

         <input
            type='search'
            className={styles.search_input}
            placeholder='What are you looking for?'
            onChange={handleQueryChange}
            onKeyDown={handleKeyPress}
            value={submittedQuery.query}
         />
      </div>
   );
};

export default SearchBar;
