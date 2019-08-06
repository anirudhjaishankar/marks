var express = require('express');
var bcrypt = require('bcryptjs');
var router = express.Router();
var User = require("../models/UserModel.js");

router.get("/",(req, res)=>{
    res.render('signup.ejs');
});

router.post("/",(req, res)=>{
    var password = bcrypt.hashSync(req.body.password);
    User.create({
        username: req.body.username,
        access: req.body.access,
        password: password
    });
    res.redirect("/login");
});

module.exports = router;