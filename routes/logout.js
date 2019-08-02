var express = require('express');
var router = express.Router();

router.get('/logout',(req,res)=>{
    req.session.destroy(()=>{
        console.log('user logged out');
    });
    res.send('User Logged out');
});

module.exports = router;