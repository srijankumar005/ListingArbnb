const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default:
        "https://unsplash.com/photos/rear-view-of-a-sleek-dark-porsche-carrera-5loMARa21e8",
        set: (v) =>
            v === ""
        ? "https://unsplash.com/photos/rear-view-of-a-sleek-dark-porsche-carrera-5loMARa21e8" 
        : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;