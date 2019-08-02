var express = require('express');
var router = express.Router();

router.get('/',(req,res)=>{
    req.session.destroy(()=>{
        console.log('user logged out');
    });
    res.render('logout')
});

module.exports = router;
