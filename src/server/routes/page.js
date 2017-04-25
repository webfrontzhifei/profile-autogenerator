var express = require('express');
const router = express.Router();
router.get('/*', function(req, res, next) {
	res.render('test.html', {
		'name':'zhifei'
	});
});

module.exports = router;