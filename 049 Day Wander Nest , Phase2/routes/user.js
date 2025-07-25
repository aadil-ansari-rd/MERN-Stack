const express = require('express')
const router = express.Router()
const User = require("../models/User.js");
const wrapAsync = require('../utils/wrapAsync.js');
const passport = require('passport')
const {saveRedirectUrl}= require('../middleware.js')


//Signup

router.get('/signup', (req, res) => {
    res.render('users/signup.ejs')
})

router.post("/signup", wrapAsync(async (req, res) => {
    try {
        let { name, username, email, password } = req.body;
        const newUser = User({ name, email, username });
        const registeredUserr = await User.register(newUser, password);
        req.login(registeredUserr, (err) => {
            if (err) {
                return next(err);

            }
            req.flash("success", "Welcome to Wanser Nest");
            res.redirect("/listings");
        })

    } catch (e) {
        req.flash("error", e.message);
    }

}))


//Login


router.get('/login', (req, res) => {
    res.render('users/login.ejs')
})



router.post("/login", saveRedirectUrl , passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true
}), wrapAsync(async (req, res) => {
    req.flash("success", "Welcome to Wander Nest! You are logged in!");
    let redirectUrl = res.locals.redirectUrl || "/listings"
    res.redirect(redirectUrl);
}))


//Log out

router.get('/logout', (req, res, next) => { //This function should not be in wrapAsync
    req.logout((err) => {
        if (err) {
            return next(err)
        }
        req.flash("success", "You  have  been  logged  out.");
        res.redirect("/listings");
    })

});


module.exports = router;