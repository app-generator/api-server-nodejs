import "dotenv/config";

import compression from "compression";
import cors from "cors";
/*

Copyright (c) 2019 - present AppSeed.us

*/
import express from "express";
import passport from "passport";

import initPassport from "../config/passport";
import routes from "../routes/users";
import { connect } from "./database";
//swagger
const router = require("express").Router();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

router.use("/api-docs", swaggerUi.serve);
router.get("/api-docs", swaggerUi.setup(swaggerDocument));

// Instantiate express
const server = express();
server.use(compression());

// Passport Config
initPassport(passport);
server.use(passport.initialize());

// Connect to sqlite
if (process.env.NODE_ENV !== "test") {
  connect();
}

server.use(cors());
server.use(express.json());

// Initialize routes middleware
server.use("/api/users", routes);

export default server;
