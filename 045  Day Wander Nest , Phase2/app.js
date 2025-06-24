const express = require('express');
const connection = require('./connection');
//const listing = require('./routes/listing')
const Listing = require('./models/Listing.js')
const Review = require('./models/Review.js')
const path = require('path')
const methodOverride = require('method-override');
const ejsmate = require('ejs-mate');
const app = express();
const wrapAsync = require('./utils/wrapAsync.js')
const ExpressError = require('./utils/EexressError.js')
const { listingSchema, reviewSchema } = require('./schema.js')
connection();


app.use(methodOverride("_method"))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
//app.use(listing);
app.engine('ejs', ejsmate);


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

const validateReview = (req, res, next) => {
    console.log(req.body)
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(',');
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}


//ROUTES ARE HERE

app.get('/', wrapAsync(async (req, res, next) => {
    res.send('all okay');
}))

//Index Route
app.get('/listings', wrapAsync(async (req, res, next) => {
    let listings = await Listing.find({});
    res.render('./listings/index.ejs', { listings })
}))


//Show Specific Hotel

app.get('/listings/:id', wrapAsync(async (req, res, next) => {
    let id = req.params.id;
    let listing = await Listing.findById(id).populate('reviews');
    res.render('./listings/show.ejs', { listing });
}))


//Create new listing
app.get('/listing/new', wrapAsync(async (req, res, next) => {
    res.render('./listings/newListingPage.ejs')
}))


app.post('/listing/new', validateListing, wrapAsync(async (req, res, next) => {

    //We should throw error if any of the field is empty. This is beacuse this can cause error  in the database
    //when the form  data be sentt from the api testing softwares . This is called manually handling schema validation.


    // First way : Lengthy
    // if(!req.body){
    //     throw new ExpressError(404, 'Please enter valid data')
    // }
    // let listing = new Listing(req.body.listing);

    // if(!req.body.title){
    //     throw new ExpressError(400, 'Title is missing')
    // }
    // if(!req.body.description){
    //     throw new ExpressError(400, 'Desription is missing')
    // }
    // if(!req.body.locaiton){
    //     throw new ExpressError(400, 'Location is missing')
    // }



    //Second way : with Joi
    // let result  = listingSchema.validate(req.body);
    // console.log(result)
    // if(result.error){
    //     throw new ExpressError(400, result.error);
    // }


    //Third way : making a separeate function of the second way and use it directly like a middleware


    console.log(req.body)
    let listing = new Listing(req.body.listing);
    console.log(listing);
    await listing.save();
    res.redirect('/listings')

}))


//Edit a listing

app.get('/listings/:id/edit', wrapAsync(async (req, res, next) => {
    let id = req.params.id;
    let listing = await Listing.findById(id);
    res.render('./listings/editListingPage.ejs', { listing })
}))

app.put('/listings/:id/edit', validateListing, wrapAsync(async (req, res, next) => {
    let id = req.params.id;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing })
    res.redirect(`/listings/${id}`);
}))

//Delete a listing
app.delete('/listings/:id', wrapAsync(async (req, res, next) => {
    let id = req.params.id;
    await Listing.findByIdAndDelete(id);
    res.redirect('/listings')
}))



//REVIEWS
//Post Review Route

app.post('/listings/:id/reviews', validateReview, wrapAsync(async (req, res, next) => {
    console.log("sace ke lie aaya hai")
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    res.redirect(`/listings/${listing.id}`)
}))


//Delete review route

app.delete('/listings/:id/reviews/:reviewId', wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/listings/${id}`);
}))

























app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page not found"));
})

//Error Handler : Middleware
app.use((err, req, res, next) => {

    let { statusCode = 500, message = 'something went wrong !' } = err;
    res.status(400).render('error.ejs', { err })
    // res.status(statusCode).send(message);
})

app.listen('8080', (err) => {
    if (err) {
        console.log(err.message);

    } else {
        console.log("Server is running on port 8080")
    }
})