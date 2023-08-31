// Import the mongoose module
const mongoose = require('mongoose');

const URI =
   'mongodb+srv://Nitsan_new:UM5pItXRUusNjfwu@cluster0.gpc3z.mongodb.net/';

// Define the database URL to connect to.
const mongoDB = URI;

const connectDB = async () => {
   try {
      await mongoose.connect(mongoDB);
      console.log('Connected to the database successfully');
   } catch (err) {
      console.err('Error connecting to the database:', err);
   }
};

module.exports = connectDB;
