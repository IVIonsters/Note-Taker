const router = require('express').Router();
const path = require('path');

// GET route for homepage
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// GET route for notes page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});


// Export
module.exports = router;