import React, { useState } from 'react';
import styles from './SearchBar.module.css';
// import Input from '@mui/joy/Input';
// import Sheet from '@mui/joy/Sheet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; // Import search icon

const pictures = [
   {
      artist: 'Leonardo da Vinci',
      title: 'Mona Lisa',
   },
   {
      artist: 'Vincent van Gogh',
      title: 'Starry Night',
   },
   {
      artist: 'Pablo Picasso',
      title: 'Guernica',
   },
   {
      artist: 'Edvard Munch',
      title: 'The Scream',
   },
   {
      artist: 'Claude Monet',
      title: 'Water Lilies',
   },
   {
      artist: 'Salvador Dalí',
      title: 'The Persistence of Memory',
   },
];

const SearchBar = () => {
   const [state, setState] = useState({
      query: '',
      list: [],
   });

   const handleQueryChange = (e) => {
      const query = e.target.value.toLowerCase();

      const results = pictures.filter((picture) => {
         if (query === '') return true; // Return all pictures if query is empty

         const titleMatch = picture.title.toLowerCase().includes(query);
         const artistMatch = picture.artist.toLowerCase().includes(query);

         return titleMatch || artistMatch;
      });

      setState({
         query: e.target.value,
         list: results,
      });
   };

   return (
      <div className={styles.search_bar}>
         <FontAwesomeIcon icon={faMagnifyingGlass} color='grey' />

         <input
            type='search'
            className={styles.search_input}
            placeholder='What are you looking for?'
            onChange={handleQueryChange}
            value={state.query}
         />
         <ul className={styles.filtered}>
            {state.query === ''
               ? ''
               : !state.list.length
               ? 'Your query did not return any results'
               : state.list.map((picture) => {
                    return <li key={picture.title}>{picture.title}</li>;
                 })}
         </ul>
      </div>

      //   <div style={{ backgroundColor: '#1c1c1c' }} className={styles.search_bar}>

      //  <input
      //     type='search'
      //     onChange={handleQueryChange}
      //     // startDecorator={
      //     //    <FontAwesomeIcon icon={faMagnifyingGlass} color='grey' />
      //     // }
      //     placeholder='Search movie...'
      //     // variant='solid'
      //     style={{
      //        width: '50%',
      //        marginTop: '50px',
      //        marginLeft: '450px',
      //        borderRadius: '20px',
      //        fontWeight: 'normal',
      //        backgroundColor: '#1c1c1c',
      //        border: '1px solid grey',
      //        //    '--Input-focusedThickness': '0',
      //     }}
      //     className={styles.search_input}
      //     value={state.query}
      //  />
      /* <Sheet */
      /* component='div'
            sx={{
               display: 'flex',
               justifyContent: 'center',
               backgroundColor: 'transparent',
               marginLeft: '130px',
            }} */

      //  <ul
      //     style={{
      //        border: '1px solid grey',
      //        borderRadius: '20px',
      //        width: '50%',
      //        display: 'flex',
      //        justifyContent: 'center',
      //        color: 'white',
      //     }}
      //  >
      //     {state.query === ''
      //        ? ''
      //        : !state.list.length
      //        ? `A movie in the name ${state.query} was not found`
      //        : state.list.map((picture) => {
      //             return (
      //                <li key={picture.title}>
      //                   {picture.title}
      //                   <br />
      //                </li>
      //             );
      //          })}
      //  </ul>
      /* </Sheet> */
      //   </div>
   );
};

export default SearchBar;

/**
 * display: flex;
   align-items: center;
   background-color: #ffffff;
   border: 1px solid #ccc;
   padding: 8px;
   border-radius: 20px;
   margin-top: 20px;
   margin-left: 70px;
   margin-bottom: 23px;
   width: 90%;
 */
