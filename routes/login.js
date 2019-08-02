var express = require('express');
var router = express.Router();


router.get('/',function(req, res, next){
  res.render("login");
});

router.post('/',(req,res)=>{
    if(req.body.id == "abc" && req.body.pass=="123"){
        req.session.user = {
                                id:"abc",
                                password:"123"
                            };
        res.redirect('/marks');
    }else{
        res.send('Wrong credentials');
    }
});

module.exports = router;
