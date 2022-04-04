const proxy = require('./server.js');
const express = require('express');
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", proxy());

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
