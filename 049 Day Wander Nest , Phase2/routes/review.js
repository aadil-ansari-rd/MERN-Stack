const express = require('express');
const router = express.Router({mergeParams: true}); 
const Review = require('../models/Review.js')
const wrapAsync = require('../utils/wrapAsync.js')

const Listing = require('../models/Listing.js');
const { validateReview, isLoggedin , isReviewAuthor } = require('../middleware.js');


//Post Review Route

router.post('/', isLoggedin,validateReview, wrapAsync(async (req, res, next) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    req.flash("success", "New review created! ")

    res.redirect(`/listings/${listing.id}`)
}))


//Delete review route

router.delete('/:reviewId', isLoggedin ,isReviewAuthor ,wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review deleted! ")

    res.redirect(`/listings/${id}`);
}))






module.exports = router;