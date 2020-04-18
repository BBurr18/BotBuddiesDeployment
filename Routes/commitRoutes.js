const router = require('express').Router();
const ReturnFormat = require('../Util/ReturnFormat');
const errorHandle = require('../Util/ErrorHandle');
const route_start = '/commit';

//Commit Route
router.post(route_start, (req, res, next) => {
	try {
		const rf = new ReturnFormat(req);
    		res.send(rf.format());
	} catch(err) {
		errorHandle(res, err, route_start);
	}
})

module.exports = router;
