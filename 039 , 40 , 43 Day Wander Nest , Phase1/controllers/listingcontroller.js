const Listing = require('../models/Listing')

async function getListings(req, res) {
    try {
        let listings = await Listing.find({});
        res.render('./listings/index.ejs', { listings })
    } catch (err) {
        console.log(err.message)
    }
}

async function getListing(req, res) {
    try {
        let id = req.params.id;
        let listing = await Listing.findById(id);
        res.render('./listings/show.ejs', { listing });

    } catch (err) {
        console.log(err.message)
    }
}


async function getNewListingpage(req, res) {
    try {
        res.render('./listings/newListingPage.ejs')
    } catch (err) {
        console.log(err.message)
    }
}

async function addNewListings(req, res, next) {
    try {
        let listing = new Listing(req.body);
        await listing.save();
        res.send("DAta saved")
    } catch (err) {
        console.log(err.message)
        next(err)
    }
}




async function getEditListingPage(req, res) {
    try {
        let id = req.params.id;
        let listing = await Listing.findById(id);
        res.render('./listings/editListingPage.ejs', { listing })

    } catch (err) {
        console.log(err.message)
    }
}

async function addEditListing(req, res) {
    try {
        let id = req.params.id;
        // let listing = await Listing.findById(id);
        // listing.title = req.body.title
        // listing.description = req.body.description
        // listing.price = req.body.price
        // listing.location = req.body.location
        // listing.country = req.body.country
        // await listing.save();
        await Listing.findByIdAndUpdate(id, { ...req.body })
        res.redirect(`/listings/${id}`);

    } catch (err) {
        console.log(err.message)
    }
}

async function deleteListing(req, res) {
    try {
        let id = req.params.id;
        await Listing.findByIdAndDelete(id);
        res.redirect('/listings')
    }
    catch (err) {
        console.log(err.message)
    }
}





// async function getListings(req, res,next) {
//     let listings = await Listing.find({});
//     res.render('./listings/index.ejs', { listings })

// }

// async function getListing(req, res,next) {
//     let id = req.params.id;
//     let listing = await Listing.findById(id);
//     res.render('./listings/show.ejs', { listing });

// }


// async function getNewListingpage(req, res,next) {
//     res.render('./listings/newListingPage.ejs')

// }

// async function addNewListings(req, res, next) {
//     let listing = new Listing(req.body);
//     await listing.save();
//     res.send("DAta saved")

// }


// async function getEditListingPage(req, res,next) {
//     let id = req.params.id;
//     let listing = await Listing.findById(id);
//     res.render('./listings/editListingPage.ejs', { listing })

// }

// async function addEditListing(req, res,next) {
//     let id = req.params.id;
//     await Listing.findByIdAndUpdate(id, { ...req.body })
//     res.redirect(`/listings/${id}`);

// }

// async function deleteListing(req, res,next) {
//     let id = req.params.id;
//     await Listing.findByIdAndDelete(id);
//     res.redirect('/listings')

// }


module.exports = {
    getListings,
    getListing,
    getNewListingpage,
    addNewListings,
    getEditListingPage,
    addEditListing,
    deleteListing,

}