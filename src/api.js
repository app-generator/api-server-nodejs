/*

Copyright (c) 2019 - present AppSeed.us

*/
const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const compression = require('compression');
const https = require('https');
const http = require('http');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const db = require('./config/keys').mongoURI;

require('dotenv').config();

// Instantiate express
const app = express();
app.use(compression());

// Passport Config
require('./config/passport')(passport);

// Connect to MongoDB
mongoose
    .connect(
        db, {useNewUrlParser: true,
          useFindAndModify: false,
          useUnifiedTopology: true,
          useCreateIndex: true},
    )
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err));

app.use(cors());
app.use(express.json())

// Express body parser
app.use('/public', express.static('public'));

// Initialize routes middleware
app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT;

http.createServer({
}, app)
    .listen(PORT, function() {
      console.log('API Server is listening on port ' + PORT);
    });

