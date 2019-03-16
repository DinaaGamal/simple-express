var express = require('express');
var app = express();
const fs = require('fs');
const path = require('path');

app.get('/', (req, res) => {
	res.send('Home Page');
});
app.get('/Profile', (req, res) => {
	res.send('Profile Page');
});
app.get('/pic', (req, res) => {
	res.sendFile(path.join(__dirname, './assets', req.query.name || 'M.jpg'));
});

app.listen(5000);
