import mongoose from "mongoose";

const syndicSchema =  new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    telephone:Number,
    avatar:String,
})

const Syndic = mongoose.model('syndic', syndicSchema);
export default Syndic