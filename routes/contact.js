const path = require('path');
const express = require('express');

const rootDir = require('../util/path')

const router = express.Router();

router.get('/contact-us', (req, res, next) => { 
    // res.sendFile(path.join(__dirname,'../, 'contact.html'))
    res.sendFile(path.join(rootDir, 'views', 'contact.html'))
  });

router.post('/success', (req, res, next) => { 
    res.send('Form submitted successfully');
});

module.exports = router;
