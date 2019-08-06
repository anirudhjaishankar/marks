var express = require('express');
var router = express.Router();
var User = require("../models/UserModel.js");
var bcrypt = require('bcryptjs');


router.get('/',function(req, res, next){
  res.render("login");
});

router.post('/',(req,res)=>{
    User.findOne({
        username:req.body.username
    }).exec(function(err, data){
        if(data){
            if(bcrypt.compare(req.body.password, data.password)){
                req.session.user = data;
                if(data.access === "student"){
                    res.redirect('/student');
                }else if(data.access === "staff"){
                    res.redirect("/upload");
                }
            }
        }else{
            res.send('Wrong login credentials!!');
        }
    });
    
});

module.exports = router;
