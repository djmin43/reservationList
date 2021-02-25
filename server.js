const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');


//Initial Setup
const app = express();
dotenv.config({ path: './config/config.env' });

//CORS
app.use(cors())

//Connect to DB
connectDB();

//bodyparser
app.use(express.json());

//Routes
const reservation = require('./routes/api/Reservation');
app.use('/api/', reservation);



const port = process.env.PORT || 5000
app.listen(port, () => {`Server running on port ${port}`})


