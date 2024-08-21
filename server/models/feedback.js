import mongoose from "mongoose";

const feedbackSchema =  new mongoose.Schema({
    name:String,
    message:String,
})

const feedbackModel = mongoose.model('feedback', feedbackSchema);
export default feedbackModel