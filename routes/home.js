var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next){
	res.render("index");
	res.send(req.flush());
})
router.post('/', function(req, res, next){
	res.send(req.flush());
})
module.exports = router;