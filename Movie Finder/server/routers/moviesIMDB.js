const axios = require('axios');
require('dotenv').config();

const fetchData = async () => {
   const options = {
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/auto-complete',
      params: { q: 'strange' },
      headers: {
         'X-RapidAPI-Key': process.env.API_KEY,
         'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
      },
   };

   try {
      const response = await axios.request(options);
      console.log(response.data);
   } catch (error) {
      console.error(error);
   }
};

// Call the async function to fetch the data
fetchData();
