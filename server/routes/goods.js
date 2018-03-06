var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('./../models/goods');
var User = require('../models/user');
mongoose.connect('mongodb://localhost:27017/vue_shop_lesson');

mongoose.connection.on('connected',function () {
  console.log('success');
});
mongoose.connection.on('error',function () {
  console.log('error');
});
mongoose.connection.on('disconnected',function () {
  console.log('disconnected');
});

/* GET users listing. */
router.get('/list', function(req, res, next) {
  let page = parseInt(req.param('page'));
  let pageSize = parseInt(req.param('pageSize'));
  let priceLevel = req.param('priceLevel');
  let sort = req.param('sort');
  let skip = (page-1)*pageSize;
  let params = {};
  let priceGt = '';
  let priceLte = '';
  if(priceLevel != 'all'){
    switch (priceLevel){
      case '0':priceGt = 0;priceLte = 100;break;
      case '1':priceGt = 100;priceLte = 500;break;
      case '2':priceGt = 500;priceLte = 1000;break;
      case '3':priceGt = 1000;priceLte = 2000;break;
      case '4':priceGt = 2000;priceLte = 3000;break;
      case '5':priceGt = 3000;priceLte = 6000;break;
    }
    params = {
      salePrice: {
        $gt:priceGt,
        $lte: priceLte
      }
    }
  }
  let goodsModel = Goods.find(params).skip(skip).limit(pageSize);
  goodsModel.sort({'salePrice': sort});
  goodsModel.exec(function (err, doc) {
    if(err){
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      res.json({
        status: 0 ,
        msg: '',
        result: {
          count: doc.length,
          list: doc
        }
      })
    }
  })
});
router.get('/queryKey',function (req, res, next) {
  let page = parseInt(req.param('page'));
  let pageSize = parseInt(req.param('pageSize'));
  let keyWord = req.param('keyWord');
  let sort = req.param('sort');
  let skip = (page - 1) * pageSize;

  let goodsLists = Goods.find({'productName':{$regex:`${keyWord}`,$options:'img'}}).skip(skip).limit(pageSize);
  goodsLists.sort({'salePrice': sort});
  goodsLists.exec(function(err, doc) {
    if(err){
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      res.json({
        status: 0,
        msg: '',
        result: {
          count: doc.length,
          list: doc
        }
      })
    }
  })
})
//用户购物车增加商品
router.post('/addCart', function (req,res,next) {
  var userId = req.cookies.userId,productId = req.body.productId;
  User.findOne({userId:userId}, function (err,doc) {
    if(err){
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      if(doc){
        var goodsItem = '';
        doc.cartList.forEach(function (item) {
          if(item.productId == productId){
            item.productNum++;
            goodsItem = item;
          }
        });
        if(goodsItem){
          doc.save(function (err2,doc2) {
            if(err2){
              res.json({
                status: '1',
                msg: err.message
              })
            }else{
              res.json({
                status:'0',
                msg:'',
                result:'add success'
              })
            }
          })
        }else {
          Goods.find({productId:productId},function (err1,doc1) {
            if(err1){
              res.json({
                status: '1',
                msg: err1.message
              })
            } else {
              if(doc1){
                doc1 = doc1[0];
                doc1.productNum = 1;
                doc1.checked = 1;
                delete doc1.productUrl;
                doc.cartList.push(doc1);
                doc.save(function (err2,doc2) {
                  if(err2){
                    res.json({
                      status:"1",
                      msg:err2.message
                    })
                  }else{
                    res.json({
                      status:'0',
                      msg:'',
                      result:'add new cartShop'
                    })
                  }
                })
              }
            }
          })
        }
      }
    }
  })
});

module.exports = router;
