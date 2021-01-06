const express = require('express');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const enforce = require ('express-sslify')

//Creating an Express application
const app = express();

//Middleware for express application . Enforcing HTTPS using enforce library.
// Heroku gives ssl certs
app.use(enforce.HTTPS({trustProtoHeader:true}));

//To serve all files using serveStatic
app.use(serveStatic(__dirname + '/dist/'))

//For Routing history
app.use(history())

 

//This is port on Heroku. Use env variable port
app.listen(process.env.PORT || 5000);
