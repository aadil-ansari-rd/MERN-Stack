const express = require('express');
const router = express.Router()
const Listing = require('../models/Listing.js')
const wrapAsync = require('../utils/wrapAsync.js')
const { validateListing,isLoggedin, isOwner}= require("../middleware.js")




//Index Route
router.get('/', wrapAsync(async (req, res, next) => {
    let listings = await Listing.find({});
    res.render('./listings/index.ejs', { listings })
}))





//Create new listing
router.get('/new',  isLoggedin , wrapAsync(async (req, res, next) => {
    res.render('./listings/newListingPage.ejs')
}))


router.post('/new',  isLoggedin ,  validateListing, wrapAsync(async (req, res, next) => {

    let listing = new Listing(req.body.listing);
    listing.owner = req.user._id; //To store the object id in the listing.
    await listing.save();
    req.flash("success", "New listing created! ")
    res.redirect('/listings')

}))

//Show Specific Hotel

router.get('/:id', wrapAsync(async (req, res, next) => {
    let id = req.params.id;
    // let listing = await Listing.findById(id).populate('review').populate("owner");  //Two populate 
    let listing = await Listing.findById(id).populate({    //Nesting Populate
        path : 'reviews',
        populate : {
            path : "author",
        },
    }).populate("owner");
    if (!listing) {
        req.flash("error", "Listing you requested for , does not exit.")
        res.redirect('/listings')
    }
    res.render('./listings/show.ejs', { listing });
}))

//Edit a listing

router.get('/:id/edit', isLoggedin ,isOwner, wrapAsync(async (req, res, next) => {
    let id = req.params.id;
    let listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing you requested for , does not exit.")
        res.redirect('/listings')
    }
    res.render('./listings/editListingPage.ejs', { listing })
}))

router.put('/:id/edit',  isLoggedin ,isOwner,  validateListing, wrapAsync(async (req, res, next) => {
    let id = req.params.id;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing })
    req.flash("success", "Listing updated! ")

    res.redirect(`/listings/${id}`);
}))

//Delete a listing
router.delete('/:id',  isLoggedin ,isOwner,  wrapAsync(async (req, res, next) => {
    let id = req.params.id;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing deleted! ")

    res.redirect('/listings')
}))



module.exports = router;