'use strict';
const pool = require('./pool');
const exam = require('./exam');
const question = require('./question');
const authentication = require('./authentication');
const user = require('./user');

module.exports = function() {
  const app = this;


  app.configure(authentication);
  app.configure(user);
  app.configure(question);
  app.configure(exam);
  app.configure(pool);
};
