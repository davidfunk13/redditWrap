const db = require("../models");
const dotEnv = require("dotenv").config();
const snoowrap = require("snoowrap");

// Defining methods for the booksController
module.exports = {
  snooScrape: function(req, res) {
    console.log(dotEnv);
    const r = new snoowrap({
      userAgent: process.env.USER_AGENT,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN
    });
    let searchQuery = req.params.sub;
    let subReddit = r.getSubreddit(searchQuery);
    subReddit.getHot().then(function(results) {
      console.log(results);
      res.json(results);
    });
  },
  getSaved: function(req, res) {
    console.log("hello");
    db.Post.find()
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  save: function(req, res) {
    console.log(req.body);
    db.Post.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  }
};
