'use strict';

var _ = require('lodash');
var Cheerio = require('./cheerio.model');
var cheerio = require('cheerio');
var request = require('superagent');


// Get list of cheerios
exports.index = function(req, res) {
   // var $ = cheerio.load(htmlFromIndeed);
   request
   .get('http://newyork.craigslist.org/search/ela?sort=date&query=ps4')
   .end(function(err,res){
    // console.log(res.text)
    var $ = cheerio.load(res.text);
        var links = [];
    var logo = $('a').each(function(i, elem){
      console.log($(this).attr('href'));
      // console.log
      // links[i] = $this.find('a').attr('href')
    })
    console.log(links)
   })
  Cheerio.find(function (err, cheerios) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(cheerios);
  });
};

// Get a single cheerio
exports.show = function(req, res) {
  Cheerio.findById(req.params.id, function (err, cheerio) {
    if(err) { return handleError(res, err); }
    if(!cheerio) { return res.status(404).send('Not Found'); }
    return res.json(cheerio);
  });
};

// Creates a new cheerio in the DB.
exports.create = function(req, res) {
  Cheerio.create(req.body, function(err, cheerio) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(cheerio);
  });
};

// Updates an existing cheerio in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Cheerio.findById(req.params.id, function (err, cheerio) {
    if (err) { return handleError(res, err); }
    if(!cheerio) { return res.status(404).send('Not Found'); }
    var updated = _.merge(cheerio, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(cheerio);
    });
  });
};

// Deletes a cheerio from the DB.
exports.destroy = function(req, res) {
  Cheerio.findById(req.params.id, function (err, cheerio) {
    if(err) { return handleError(res, err); }
    if(!cheerio) { return res.status(404).send('Not Found'); }
    cheerio.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}