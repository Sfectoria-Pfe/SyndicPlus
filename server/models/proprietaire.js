import mongoose from "mongoose";

const proprietaireSchema =  new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    telephone:Number,
    avatar:String,
    status:String,
})

const Proprietaire = mongoose.model('proprietaire', proprietaireSchema);
export default Proprietaire