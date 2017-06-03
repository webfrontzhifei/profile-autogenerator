var express = require('express');
const router = express.Router();
router.get('/index', function(req, res, next) {
	res.render('home.html', {
		'name':'zhifei'
	});
});

module.exports = router;