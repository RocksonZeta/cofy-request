cofy-request
============
[![Build Status](https://travis-ci.org/RocksonZeta/cofy.svg?branch=master)](https://travis-ci.org/RocksonZeta/cofy-request)

cofy request.

**invoke convention: `yield obj.$asyncMethod`**

```js
var request = require('cofy-request');
var r = yield request.$request('https://github.com');
r[0].statusCode.should.equal(200);
```