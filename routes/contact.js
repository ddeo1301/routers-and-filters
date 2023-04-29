const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
const productController=require('../controller/product');

const router = express.Router();

router.get('/contact-us', productController.getContact);
router.post('/success', productController.postContact);

module.exports = router;
