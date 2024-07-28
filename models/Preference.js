import mongoose from "mongoose";

const Schema = mongoose.Schema;

const preferenceSchema = new Schema({
    _id: Number,
    preferenceName : String
})
const Preference = mongoose.model('preferences', preferenceSchema);

export default Preference;