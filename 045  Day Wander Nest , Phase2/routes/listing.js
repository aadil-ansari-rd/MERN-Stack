const express = require('express');
const listingcontroller = require('../controllers/listingcontroller')
const router = express.Router()
const wrapAsync = require('../utils/wrapAsync.js')

router.get('/',(req,res)=>{
    // basecontroller.baseroute(req,res);
    res.send('all okay');
})

//Index Route
router.get('/listings',(req,res)=>{
    listingcontroller.getListings(req,res);
})


//Show Specific Hotel

router.get('/listings/:id',(req,res)=>{
    listingcontroller.getListing(req,res);
})


//Create new listing
router.get('/listing/new', (req,res)=>{
    listingcontroller.getNewListingpage(req ,res);
})

// router.post('/listing/new', (req,res)=>{
//     listingcontroller.addNewListings(req,res);
// })
router.post('/listing/new',wrapAsync((req,res,next)=>listingcontroller.addNewListings(req,res,next)))


//Edit a listing

router.get('/listings/:id/edit',(req,res)=>{
    listingcontroller.getEditListingPage(req,res);
})

router.put('/listings/:id/edit',(req,res)=>{
    listingcontroller.addEditListing(req,res);
})

//Delete a listing
router.delete('/listings/:id', (req,res)=>{
    listingcontroller.deleteListing(req,res);
})





// router.get('/', wrapAsync((req, res, next) => {
//     res.send('all okay');
// }))

// //Index Route
// router.get('/listings', wrapAsync((req, res, next) => {
//     listingcontroller.getListings(req, res, next);
// }))


// //Show Specific Hotel

// router.get('/listings/:id', wrapAsync((req, res, next) => {
//     listingcontroller.getListing(req, res,next);
// }))


// //Create new listing
// router.get('/listing/new', wrapAsync((req, res, next) => {
//     listingcontroller.getNewListingpage(req, res, next);
// }))


// router.post('/listing/new', wrapAsync((req, res, next) => {
//     listingcontroller.addNewListings(req, res, next)
// }))


// //Edit a listing

// router.get('/listings/:id/edit', wrapAsync((req, res, next) => {
//     listingcontroller.getEditListingPage(req, res, next);
// }))

// router.put('/listings/:id/edit', wrapAsync((req, res, next) => {
//     listingcontroller.addEditListing(req, res, next);
// }))

// //Delete a listing
// router.delete('/listings/:id', wrapAsync((req, res, next) => {
//     listingcontroller.deleteListing(req, res, next);
// }))












module.exports = router;