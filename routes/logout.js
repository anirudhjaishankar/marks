var express = require('express');
var router = express.Router();


router.get('/', (req, res, next)=>{
    if(req.session){
        req.session.destroy((err)=>{
            if(err){
                res.send(err);
            }else{
                res.render("logout");
            }
        });
    }
    
});

module.exports = router;
