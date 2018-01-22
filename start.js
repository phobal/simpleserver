#!/usr/bin/env node

const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const methodOverride = require('method-override');
const path = require('path');
const ip = require('ip');

const hostname = process.env.HOSTNAME || `${ip.address()}`;
const port = parseInt(process.env.PORT, 10) || 8090;
const distDir = process.argv[2] || __dirname + '/dist';
const app = express();


app.get('/', function (req, res) {
  res.sendFile(path.join(distDir, '/index.html'));
});

app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(express.static(distDir));
app.use(errorHandler({
  dumpExceptions: true,
  showStack: true,
}));

console.log('Simple static server showing %s listening at http://%s:%s', distDir, hostname, port);
app.listen(port, hostname);
