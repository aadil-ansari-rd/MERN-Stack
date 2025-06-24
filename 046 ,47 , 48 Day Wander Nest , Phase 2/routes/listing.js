const express = require('express');
const router = express.Router()
const Listing = require('../models/Listing.js')
const wrapAsync = require('../utils/wrapAsync.js')
const ExpressError = require('../utils/EexressError.js')
const { listingSchema } = require('../schema.js')

const validateListing = (req, res, next) => {
    console.log(req.body)
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(',');
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}

//Index Route
router.get('/', wrapAsync(async (req, res, next) => {
    let listings = await Listing.find({});
    res.render('./listings/index.ejs', { listings })
}))





//Create new listing
router.get('/new', wrapAsync(async (req, res, next) => {
    res.render('./listings/newListingPage.ejs')
}))


router.post('/new', validateListing, wrapAsync(async (req, res, next) => {

    console.log(req.body)
    let listing = new Listing(req.body.listing);
    console.log(listing);
    await listing.save();
    req.flash("success", "New listing created! ")
    res.redirect('/listings')

}))

//Show Specific Hotel

router.get('/:id', wrapAsync(async (req, res, next) => {
    let id = req.params.id;
    let listing = await Listing.findById(id).populate('reviews');
    if (!listing) {
        req.flash("error", "Listing you requested for , does not exit.")
        res.redirect('/listings')
    }
    res.render('./listings/show.ejs', { listing });
}))

//Edit a listing

router.get('/:id/edit', wrapAsync(async (req, res, next) => {
    let id = req.params.id;
    let listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing you requested for , does not exit.")
        res.redirect('/listings')
    }
    res.render('./listings/editListingPage.ejs', { listing })
}))

router.put('/:id/edit', validateListing, wrapAsync(async (req, res, next) => {
    let id = req.params.id;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing })
    req.flash("success", "Listing updated! ")

    res.redirect(`/listings/${id}`);
}))

//Delete a listing
router.delete('/:id', wrapAsync(async (req, res, next) => {
    let id = req.params.id;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing deleted! ")

    res.redirect('/listings')
}))



module.exports = router;