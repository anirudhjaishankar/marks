var express = require('express');
var router = express.Router();


checkLogin = (req, res, next)=>{
    if(req.session.user){
        next();
    }else{
        console.log('error');
        res.redirect('/login');
    }
}

router.get('/',checkLogin,(req, res)=>{
    res.render('marks');
});

module.exports = router;
