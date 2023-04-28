const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
const router = express.Router();

// app.use('/add-product', (req, res, next) => { 
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><br><input type="number" name="size"><br></r><button type="submit">Add Product</button></form>');
//   });

router.get('/add-product', (req, res, next) => { 
    // res.send('<form action="/admin/add-product" method="POST">' +
    //  '<input type="text" name="title"><br>' +
    //  '<input type="number" name="size"><br>' +
    //  '<button type="submit">Add Product</button></form>');
   res.sendFile(path.join(__dirname,'../', 'views', 'add-product.html'))
   //res.sendFile(path.join(__dirname,'../views/add-product.html'))
  });

router.post('add-product', (req, res, next) => { 
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;

