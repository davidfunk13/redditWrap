const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

//bodyParser is for AJAX
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Static dir
app.use(express.static('client/build'));
// tell express to use routes
app.use(routes);

//mongo
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/snooScrape');


//Api server listener
app.listen(PORT, function() {
    console.log(`Server running on port ${PORT}`)
})