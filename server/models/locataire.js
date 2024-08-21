import mongoose from "mongoose";

const locataireSchema =  new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    appartement:Number,
    nbredeEtage:Number,
    telephone:Number,
    avatar:String,
    status:String,
})

const Locataire = mongoose.model('locataire', locataireSchema);
export default Locataire