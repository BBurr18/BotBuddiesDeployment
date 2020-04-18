require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./Routes');

const http = require('http');
const PORT = process.env.PORT || 8080;
const PROJECT = process.env.PROJECT_NAME;
const TEAM = process.env.TEAM_NAME
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
console.log(`SERVER CONFIGURATION SUCCESSFULL FOR TEAM : ${TEAM} on project ${PROJECT}`);
app.listen(PORT, function () {
	    console.log(`${TEAM} -> Starting ${PROJECT} server on port: ${PORT}`);
});
