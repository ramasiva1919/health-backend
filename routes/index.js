var express = require('express');
var router = express.Router();
var doc = require("../controlers/doccument")
var docPost = require("../controlers/doccument")
/* GET home page. */
console.log(doc,"doc")
router.get('/doccument', doc);
router.post('/data', docPost) 

module.exports = router;
