var express = require('express'); // requires express package
var bodyParser = require('body-parser'); // requires body-parser package
var path = require('path'); // requires path package

var app = express(); //creating express server
var PORT = process.env.PORT || 80; //setting up port which we use for app

//below code comes from body-parser package that makes it easy for our server to interpret data sent to it
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// the below points our server to a series of "route" files
require('./app/routing/api-routes.js')(app); // path to the file
require('./app/routing/html-routes.js')(app); // path to the file

// the below code starts the server

app.listen(PORT, function(){
	console.log('App listening on PORT: ' + PORT);
})