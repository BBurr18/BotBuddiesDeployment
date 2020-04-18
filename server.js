require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./Routes');

const http = require('http');
const PORT = process.env.PORT || 8080;

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
	    if (req.method === 'PUT' || req.method === 'POST') {
		            if (req.body && req.body.id) {
				                delete req.body.id;
				            }
		        }
	    next();
});

app.use(apiRoutes);
app.use(express.static('public'));

app.listen(PORT, function () {
	    console.log('SERVE => Starting server on port: ' + PORT);
});
