const router = require('express').Router();
const ReturnFormat = require('../Util/ReturnFormat');
const route_start = '/commit';

//Commit Route
router.post(route_start, (req, res, next) => {
	const rf = new ReturnFormat(req);
    	res.send(rf.format());
})

module.exports = router;
