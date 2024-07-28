import mongoose from "mongoose";

const Schema = mongoose.Schema;

const statusSchema = new Schema({
    _id: String,
    state : String
})
const Status = mongoose.model('statuses', statusSchema);

export default Status;