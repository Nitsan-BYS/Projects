const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

//Get all movies
router.get('/', async (req, res) => {
   try {
      const movies = await Movie.find();
      res.json(movies);
   } catch (e) {
      console.error(e.message);
      res.status(500).send('Server Error');
   }
});

//Get a single movie
router.get('/:id', async (req, res) => {
   try {
      const movie = await Movie.findOne({ movie_id: req.params.id });
      if (!movie) {
         return res.status(404).json({ error: 'Movie not found.' });
      }
      res.json(movie);
   } catch (e) {
      console.error(e.message);
      res.status(500).send('Server Error');
   }
});

//Add a new movie
// Middleware
function validateMovieFields(req, res, next) {
   const { movie_id, name, genre, description, date } = req.body;

   if (!movie_id || name || genre || description || date) {
      return res.status(400).json({ error: 'All fields are required.' });
   }
   next();
}

router.post('/add-movie', async (req, res) => {
   const { movie_id, name, genre, description, date } = req.body;

   const newMovie = new Movie({
      movie_id,
      name,
      genre,
      description,
      date,
   });

   await newMovie
      .save()
      .then((savedMove) => {
         res.status(201).json(savedMove);
      })
      .catch((error) => {
         res.status(500).json({ error: 'Failed to add movie.' });
      });
});

//Update an existing movie
router.put('/update-movie/:id', async (req, res) => {
   const movieId = req.params.id;
   const { name, genre, description, date } = req.body;
   Movie.findOneAndUpdate(
      { movie_id: movieId },
      { $set: { name, genre, description, date } },
      { new: true }
   )
      .then((updatedMovie) => {
         if (!updatedMovie) {
            return res.status(404).json({ error: 'Movie not found.' });
         }
         res.json(updatedMovie);
      })
      .catch((err) => {
         res.status(500).json({ error: 'Failed to update movie.' });
      });
});

//Delete a movie
router.delete('/delete-movie/:id', async (req, res) => {
   const movieId = req.params.id;

   Movie.findOneAndDelete({ movie_id: movieId })
      .then((deletedMovie) => {
         if (!deletedMovie) {
            return res.status(404).json({ error: 'Movie not found.' });
         }
         res.json({ message: 'Movie deleted Successfully.' });
      })
      .catch((err) => {
         res.status(500).json({ error: 'Failed to delete movie.' });
      });
});

module.exports = router;
