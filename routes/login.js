var express = require('express');
var router = express.Router();


router.get('/login',(req,res)=>{
    res.send('login');
});

router.post('/login',(req,res)=>{
    if(req.body.id == "abc" && req.body.password=="123"){
        req.session.user = {    
                                id:"abc",
                                password:"123"
                            };
        res.redirect('/marks');                    
    }else{
        res.send('Wrong credentials');
    }
})

module.exports = router;