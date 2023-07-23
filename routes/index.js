var express = require('express');
var router = express.Router();
var Product=require('../model/user');
var mongoose=require('mongoose');
var mongodb=require('mongodb');
var counttt=require('../controller/user_control');
var autoIncrement = require('mongoose-auto-increment');
var search=require('../public/javascripts/js');
/* GET home page. */
var path = require("path");
var app=express();

//username:{$regex: 'a'}//title price taxes ads discount total count category
router.get('/',(req,res,next)=>{
   //console.log(req.body.sear);
   Product.find({},'title price taxes ads discount total count category',(error,result)=>{
    if(error){console.log(error);}
    res.render('layout',{items:result});
    //res.redirect('/');
    });
});

router.post('/find',(req,res,next)=>{
  //console.log(req.body.sear);
  var id=req.body.update;
  //res.send(id);
  var obj={};
  Product.find({_id:id},'title price taxes ads discount total count category',(error,result)=>{
   if(error){console.log(error);}
   //res.send(result);
   obj=result;
   //res.render('layout',{prod:result});
   //res.redirect('/');
   });

   Product.find({},'title price taxes ads discount total count category',(error,result)=>{
    if(error){console.log(error);}
    res.render('layout',{items:result,prod:obj});
    //res.redirect('/');
    });


});



/*router.post('/title',(req,res,next)=>{
  var s="";
  alert('hello');
  s=req.body.sear;
  
  Product.find({title:{$regex:`${s}`}},'title price taxes ads discount total count category',(error,result)=>{
    if(error){console.log(error);}
    res.render('layout',{items:result});
    //res.redirect('/');
    //res.redirect('/');
    });
});*/

router.post('/category',(req,res,next)=>{
  //alert('hello');
  var s="";
  s=req.body.sear;
  Product.find({category:{$regex:`${s}`}},'title price taxes ads discount total count category',(error,result)=>{
    if(error){console.log(error);}
    res.render('layout',{items:result});
    //res.redirect('/');
    //res.redirect('/');
    });
});

router.post('/title',(req,res,next)=>{
  //alert(req.body.title_btn);
  var s="";
  s=req.body.sear;
  Product.find({title:{$regex:`${s}`}},'title price taxes ads discount total count category',(error,result)=>{
    if(error){console.log(error);}
    res.render('layout',{items:result});
    //res.redirect('/');
    //res.redirect('/');
    });
    //res.json({message: 'message here'}); 
  //next();  
});

//router.post('/tit',(req,res,next)=>{
//  res.send(req.body.btn1);
//});
router.get('/', function(req, res, next) {
  //alert(req.body.inp);
  res.render('layout', { title: 'CRUDS' });
});


router.post('/insert',(req,res,next)=>{

//var countt=0;
//console.log(say());
  //console.log(countt);   
  //User.countDocuments().then((co)=>{
  //  countt=co;//
  //});
  //const number = User.countDocuments();
  /*var cc=async function() {
    var cou = await User.countDocuments();
    return count;
  };*/
  //User.count({}, function(err, count) {
    //console.log(cc);
  //c++;       

  // Store the number of documents in a variable
  //console.log=User.countDocuments().then((docs) => {
  //  return docs;
  //});
  //var test=0;
  //User.count((count)=>{
  //  test=count;
  //});
  
   //chromeApi.msg.User.countDocuments().then((docs) => {
  //  test=docs;
  // });
    //  return docs;
//});
  //console.log(test);
  
  //title price taxes ads discount total count category
  var product=new Product({
    
    title:req.body.title,
    price:req.body.price,
    taxes:req.body.taxes,
    ads:req.body.ads,
    discount:req.body.discount,
    total:req.body.total,
    count:req.body.count,
    category:req.body.category
  });
  //product._id=new mongoose.Types.ObjectId();
  //product.title="1";
  //console.log(req.body.title);
  product.save((error,result)=>{
            if(error)
            {
              console.log(error);
              res.redirect('/');
              return;
            }
            else
            {
              console.log(product);
              res.redirect('/');
            }
  });
  //res.redirect('/');
  //console.log(req.body.username);
});



router.post('/update',(req,res,next)=>{
  //res.send(req.body.shady);
  //User.find()
  //var cc=1;
  //var upu={idd:++cc};{},
 //{ $set: { id: { $inc: 1 } } }
  /*User.updateMany(
    {},{$inc:{idd:1}},(err,ress)=>{
      if(err)console.log('error');
      else console.log(ress);
      res.redirect('/user');
    });*/
  



    var ID=req.body.shady;
    var updateProduct={
      title:req.body.title,
      price:req.body.price,
      taxes:req.body.taxes,
      ads:req.body.ads,
      discount:req.body.discount,
      total:req.body.total,
      count:req.body.count,
      category:req.body.category
    };
    
    Product.updateOne({_id:ID},{$set:updateProduct},(error,result)=>{
          if(error){
            console.log(error);
            res.redirect('/');
          }
          else 
          {
            console.log(result);
            res.redirect('/');//get after post
          }
    });
    //res.redirect('/');
});

router.post('/delete',(req,res,next)=>{
//res.send(req.body.delete);
  /*User.deleteMany({})
    .then(() => {
      User.initialize()
    })
    .catch((err) => {
  
    }); */
    //var ID=req.body.id;
    /*User.deleteOne({idd:1},(error,result)=>{
      if(error){console.log(error);res.redirect('/');}
      else 
      {
        console.log(result);
        res.redirect('/user');
      }
    });*/
        var ID=req.body.delete;
        Product.deleteOne({_id:ID},(error,result)=>{
          if(error){console.log(error);res.redirect('/');}
          else 
          {
            console.log(result);
            res.redirect('/');
          }
        });
});
router.post('/deleteAll',(req,res,next)=>{
  Product.deleteMany({})
  .then(() => {
    //Product.initialize();
    res.redirect('/');
  })
  .catch((err) => {console.log(err)});
});
module.exports = router;
