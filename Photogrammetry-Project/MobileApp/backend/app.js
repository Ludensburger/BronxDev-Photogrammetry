const express = require('express');
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/users', userRoutes);

module.exports = app;