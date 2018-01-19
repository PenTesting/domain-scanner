'use strict';

// Scanners and Tools
const Pwned = require('pwned-api');
const pwner = new Pwned();

module.exports = (domain, options, cb) => {
  pwner.breaches({domain}, (err, results) => {
    cb(null, err ? null : results);
  });
};