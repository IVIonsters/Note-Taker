const router = require('express').Router();
const htmlPageRoute = require('./htmlpage');
const noteRoute = require('./noteroute');


// route middleware
router.use('/api', noteRoute);
router.use('/', htmlPageRoute);

// export
module.exports = router;