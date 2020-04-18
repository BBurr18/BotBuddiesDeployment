const router = require('express').Router();
const route_start = '/comment';

//Comment Route
router.get('/comment', (req, res, next) => {
    const response = {
        message: "TBD - This is a comment from GitBot!"
    }
    res.send(response)
})

module.exports = router;