'use strict';
var request = require('../');
var co = require('co');

describe("cofy-request", function(){
	it("#request" , function(done){
		co(function*(){
			var r = yield request.$request('https://github.com');
			r[0].statusCode.should.equal(200);
			done();
		});
	});
	it("#get" , function(done){
		co(function*(){
			var r = yield request.$get('https://github.com');
			r[0].statusCode.should.equal(200);
			done();
		});
	});
});