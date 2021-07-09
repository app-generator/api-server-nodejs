import 'dotenv/config';

import compression from 'compression';
import cors from 'cors';
/*

Copyright (c) 2019 - present AppSeed.us

*/
import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';

import keys from '../config/keys';
import initPassport from '../config/passport';
import routes from '../routes/users';

// Instantiate express
const server = express();
server.use(compression());

// Passport Config
initPassport(passport);
server.use(passport.initialize());

const db = keys.mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
  )
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

server.use(cors());
server.use(express.json());

// Initialize routes middleware
server.use('/api/users', routes);

export default server;
