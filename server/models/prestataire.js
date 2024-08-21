import mongoose from "mongoose";

const prestataireSchema =  new mongoose.Schema({
    name:String,
    email:String,
    travail:String,
    description:String,
    telephone:Number,
    avatar:String,
})

const Prestataire = mongoose.model('Prestataire', prestataireSchema);
export default Prestataire