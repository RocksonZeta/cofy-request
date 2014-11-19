'use strict';
var cofy = require('cofy');
var request = require('request');
request.$request = cofy.fn(request);
cofy.object(request,true,['put','patch','post','head','del','get']);
module.exports  = request;