const express = require('express')
const router = express.Router()
const User = require("../models/User.js");
const wrapAsync = require('../utils/wrapAsync.js');
const passport = require('passport')

router.get('/signup', (req, res) => {
    res.render('users/signup.ejs')
})

router.post("/signup", wrapAsync(async (req, res) => {
    try {
        let { name, username, email, password } = req.body;
        const newUser = User({ email, username });
        const registeredUserr = await User.register(newUser, password);
        req.flash("success", "Welcome to Wanser Nest");
        res.redirect("/listings");
    } catch (e) {
        req.flash("error", e.message);
    }

}))

router.get('/login', (req, res) => {
    res.render('users/login.ejs')
})

router.post("/login", passport.authenticate("local",{
    failureRedirect:"/login",
    failureFlash:true
}) , wrapAsync(async (req, res) => {
    req.flash("success" , "Welcome to Wander Nest! You are logged in!")
    res.redirect("/listings");
}))



module.exports = router;