// Dependencies
// Series of npm packages
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// Seed data for "database"
var friends = require('./app/data/friends.js');
// =============================================================
var app = express();
const PORT = process.env.PORT || 8080;

//makes static assets in the public folder available (style.css)
app.use(express.static('app/public'));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
app.use(express.static(path.join(__dirname, '/app/public/')));

// Check if server is listening
app.listen(PORT, function () {
    console.log("FriendFinderApp listening on PORT: " + PORT);
});