import mongoose from "mongoose";

const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    _id: Number,
    locationCode : String, 
    description : String,
    preference : String,
    numOfStuckPeople : Number,
    phone : String,
    status : String,
    volunteerId : String
})
const Request = mongoose.model('requests', RequestSchema);

export default Request;