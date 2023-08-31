const mongoose = require('mongoose');
const moment = require('moment');

//Define Schema
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
   movie_id: String,
   name: String,
   genre: String,
   description: String,
   date: Date,
});

// Compile model from schema
const MovieModel = mongoose.model('Movie', MovieSchema);

module.exports = MovieModel;
