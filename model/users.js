'use strict';
var bookshelf = require('../bookshelf');

var Users = bookshelf.Model.extend({
  tableName: 'user',
});
module.exports = Users;
