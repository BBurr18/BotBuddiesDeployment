// Dependencies
const router = require('express').Router();
const defaultRoutes = require('./defaultRoutes');
const commitRoutes = require ('./commitRoutes');
const commentRoutes = require ('./commentRoutes');

// connects all routes
router.use(defaultRoutes);
router.use(commitRoutes);
router.use(commentRoutes);

module.exports = router;
