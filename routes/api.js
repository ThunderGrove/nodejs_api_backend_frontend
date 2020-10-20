var express=require('express');
var router=express.Router();

/* GET home page. */
router.get('/',function(req,res){
  res.send("API no data");
});

router.get('/add',function(req,res){
  var result;
  if(req.query.one===undefined||req.query.one==0){
    result="error";
  }else if(req.query.two===undefined||req.query.two==0){
    result="error";
  }else{
    result=parseInt(req.query.one,10)+parseInt(req.query.two,10);
  }
  res.send(result.toString());
});

router.get('/sub',function(req,res){
  var result;
  if(req.query.one===undefined||req.query.one==0){
    result="error";
  }else if(req.query.two===undefined||req.query.two==0){
    result="error";
  }else{
    result=parseInt(req.query.one,10)-parseInt(req.query.two,10);
  }
  res.send(result.toString());
});

module.exports=router;
