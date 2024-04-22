
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (request, response) => {
    response.sendFile('home.html', { root: 'views' });
});

module.exports = router;

