const express=require("express");
const router = express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
// const {listingSchema}=require("../schema.js");
// const ExpressError=require("../utils/ExpressError.js");
const Listing=require("../models/listing.js");
const {isLoggedIn, isOwner,validateListing} = require("../middleware.js");
const { findById } = require("../models/user.js");
const listingController = require("../controllers/listing.js");
const multer  = require('multer');
const {storage}=require("../cloudConfig.js");
const upload = multer({storage });

router
.route("/")
// index Route
.get(wrapAsync(listingController.index))
// create route
.post(
    isLoggedIn, 
    
    upload.single('listing[image]'),
    wrapAsync(listingController.createListing)
);

// new route
router.get("/new",isLoggedIn,listingController.renderNewForm);


router
.route("/:id")
//show route
.get(wrapAsync(listingController.showListing))
//update route
.put(
    isLoggedIn,
    isOwner,
     upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.updateListing))
//Delete route
.delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));

//Edit route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm));

module.exports=router;