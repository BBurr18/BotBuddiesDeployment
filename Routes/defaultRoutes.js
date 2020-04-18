const router = require('express').Router();
const fs = require('fs');

//Default routing for API
router.get('/', (req, res, next) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./public/html/index.html', null, function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Whoops! File not found!');
        } else {
            res.write(data);
        }
        res.end();
    });
})

module.exports = router;
