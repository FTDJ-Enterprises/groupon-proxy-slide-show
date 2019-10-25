const express = require('express');
const app = express();
const request = require('request');

require('dotenv').config();

app.use('/', express.static('public'));

const proxyRequest = (url, req, res, next) => {
  request(url, (err, response, body) => {
    if (err) { return next(err); }
    res.send(body);
  });
}

app.get('/api/images/:productId', (req, res, next) => {
  const url = `${process.env.SLIDE_SHOW_SERVER}/api/images/${req.params.productId}`;
  proxyRequest(url, req, res, next);
});

app.get('/api/:productId/reviews', (req, res, next) => {
  const url = `${process.env.REVIEWS_SERVER}/api/${req.params.productId}/reviews`;
  proxyRequest(url, req, res, next);
});

app.get('/js/slide-show/vendor.bundle.js', (req, res, next) => {
  const url = `${process.env.SLIDE_SHOW_SERVER}/vendor.bundle.js`;
  proxyRequest(url, req, res, next);
});

app.get('/js/slide-show/main.bundle.js', (req, res, next) => {
  const url = `${process.env.SLIDE_SHOW_SERVER}/main.bundle.js`;
  proxyRequest(url, req, res, next);
});

app.get('/js/reviews/vendor.bundle.js', (req, res, next) => {
  const url = `${process.env.REVIEWS_SERVER}/vendor.bundle.js`
  proxyRequest(url, req, res, next);
});

app.get('/js/reviews/main.bundle.js', (req, res, next) => {
  const url = `${process.env.REVIEWS_SERVER}/main.bundle.js`;
  proxyRequest(url, req, res, next);
});

module.exports = app;