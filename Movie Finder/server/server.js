const express = require('express');
const axios = require('axios');
const serveIndex = require('serve-index');
require('dotenv').config();
const cors = require('cors'); // Import the CORS middleware

const connectDB = require('./config/dbConnection');
//function to run in order to create our app variable
const app = express();
const port = 3001;

// Use the CORS middleware
app.use(cors());

//DB connection
connectDB();

//Middleware
app.use(express.json()); // This middleware is crucial for parsing JSON data

//ServeIndex
app.use('/public', express.static('public'));
app.use('/public', serveIndex('public'));

app.get('/', (req, res) => {
   res.send('Server is Running');
});

//IMDB API
app.get('/auto-complete', async (req, res, next) => {
   try {
      console.log('here');
      if (!process.env.API_KEY) {
         throw new Error('API key not found.');
      }
      const result = await axios.get(
         `https://imdb8.p.rapidapi.com/auto-complete?q=game`,
         {
            headers: {
               'X-RapidAPI-Key': process.env.API_KEY,
               'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
            },
         }
      );
      res.json(result.data);
      console.log(result.data);
   } catch (err) {
      next(err);
   }
});

app.use('/api/movies', require('./routers/movies'));

app.listen(port, () => {
   console.log(`Server is listening on port ${port}`);
});
