const express = require('express');
const serveIndex = require('serve-index');
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

// We can optionally add a path to handle requests to that route only
// app.use((req, res, next) => {
//    console.log('Time is: ', Date.now());
//    next();
// });

//ServeIndex
app.use('/public', express.static('public'));
app.use('/public', serveIndex('public'));

app.get('/', (req, res) => {
   res.send('Server is Running');
});

app.use('/api/movies', require('./routers/movies'));

app.listen(port, () => {
   console.log(`Server is listening on port ${port}`);
});
