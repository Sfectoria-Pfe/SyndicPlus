import mongoose from "mongoose";

const reclamationSchema =  new mongoose.Schema({
    name:String,
    message:String,
})

const reclamationModel = mongoose.model('reclamation', reclamationSchema);
export default reclamationModel