'use strict';

const Gallery = require('./app/controllers/gallery');

module.exports = [
  { method: 'GET', path: '/', config: Gallery.index },
];
