import mongoose from "mongoose";

const Schema = mongoose.Schema;

const locationSchema = new Schema({
    _id: Number,
    locationName : String
})
const Location = mongoose.model('locations', locationSchema);

export default Location;