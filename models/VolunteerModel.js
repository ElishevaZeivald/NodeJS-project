import mongoose from "mongoose";

const Schema = mongoose.Schema;
const VolunteerSchema = new Schema({
    _id: String,
    firstName: String,
    lastName: String,
    phone: String,
    volunteeringType: Array
}, {versionKey: false});

const VolunteerModel = mongoose.model("volunteers", VolunteerSchema);

export default VolunteerModel;