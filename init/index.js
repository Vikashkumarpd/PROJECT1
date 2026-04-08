const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");

const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";
main().then(()=>{
    console.log("DB connected!");
}).catch((err)=>{
    console.log(err);
});
async function main() {
    await mongoose.connect(MONGO_URL);
    
}
const initDB=async()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj,owner:"69cb8996c88a2a051ef06a80"}));
    await Listing.insertMany(initData.data);
    console.log("data was intialized");
};

initDB();
// require("dotenv").config();

// const mongoose = require("mongoose");
// const initData = require("./data.js");
// const Listing = require("../models/listing.js");

// const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
// const mapToken = process.env.MAP_TOKEN;
// const geocodingClient = mbxGeocoding({ accessToken: mapToken });

// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// async function main() {
//     await mongoose.connect(MONGO_URL);
//     console.log("DB connected!");
// }

// main().then(initDB).catch(console.log);

// const initDB = async () => {
//     await Listing.deleteMany({});

//     for (let obj of initData.data) {
//         let response = await geocodingClient.forwardGeocode({
//             query: obj.location,
//             limit: 1
//         }).send();

//         if (!response.body.features.length) continue;

//         let newListing = new Listing(obj);

//         newListing.owner = "69cb8996c88a2a051ef06a80";

//         newListing.geometry = {
//             type: "Point",
//             coordinates: response.body.features[0].geometry.coordinates
//         };

//         await newListing.save();
//     }

//     console.log("Data initialized with coordinates ✅");
// };