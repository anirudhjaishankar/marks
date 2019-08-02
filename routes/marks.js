var express = require('express');
var router = express.Router();


checkLogin = (req, res)=>{
    if(req.session.user){
        next();
    }else{
        console.log(err);
    }
}

router.get('/marks',checkLogin,(req, res)=>{
    res.render('marks');
});

module.exports = router;