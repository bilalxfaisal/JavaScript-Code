const express = require('express');
const path = require('path')
const router = express.Router();

const dir = "../files/"
router.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, dir + 'homepage.html'))
});

router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, dir + 'about.html'))
});

router.get('/work', (req, res) => {
    res.sendFile(path.join(__dirname, dir + 'work.html'))
});

router.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, dir + 'contact.html'))
});

module.exports = router;