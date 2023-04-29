const product=[];

const rootDir = require('../util/path');
const path=require('path');

exports.getAddProduct=(req,res,next)=>{
    // res.sendFile(path.join( __dirname ,'../','views','add-product.html'));
    res.sendFile(path.join(rootDir,'views','add-product.html'));
}

exports.postAddproduct=(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
}

exports.getProduct = (req, res, next) => {
    console.log("i am another middleware");
    res.sendFile(path.join(rootDir,'views','shop.html'));
}

exports.getContact = (req, res, next) => { 
    res.sendFile(path.join(rootDir, 'views', 'contact.html'))
  }

exports.postContact = (req, res, next) => { 
    res.send('Form submitted successfully');
}