import mongoose from "mongoose";

const demandeprestataireSchema =  new mongoose.Schema({
    name:String,
    email:String,
    travail:String,
    description:String,
    telephone:Number,
    cv:String,
    avatar:String,
})

const demandePrestataire = mongoose.model('demandePrestataire', demandeprestataireSchema);
export default demandePrestataire