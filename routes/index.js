const htmlPageRoute = require('./htmlpage');
const noteRoute = require('./noteroute');
const router = require('express').Router();

// route middleware
router.use('/api', noteRoute);
router.use('/', htmlPageRoute);

// export
module.exports = router;