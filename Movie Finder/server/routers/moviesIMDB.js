const axios = require('axios');

const fetchData = async () => {
   const options = {
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/actors/get-all-images',
      params: {
         nconst: 'nm0001667',
      },
      headers: {
         'X-RapidAPI-Key': 'ec0f6c1af6msha1ca0ffc65eab04p1e470bjsnd752878500a9',
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
