var express = require('express');
var router = express.Router();


function CheckLogin(req, res, next){
    if(req.session.user.access == 'student'){
        next();
    }else{
        res.send("not logged in");
    }
}
router.get("/", CheckLogin, (req, res)=>{
    console.log(req.session.user);
    res.render('student');
})

module.exports = router;