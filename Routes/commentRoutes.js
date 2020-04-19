const router = require('express').Router();
const ReturnFormat = require('../Util/ReturnFormat');
const errorHandle = require('../Util/ErrorHandle');
const route_start = '/comment';

//Comment Route
router.get('/comment', (req, res, next) => {
	try {
		const rf = new ReturnFormat(req);
    		res.send(rf.format());
	} catch(err) {
		errorHandle(res, err, route_start);
	}
})

module.exports = router;