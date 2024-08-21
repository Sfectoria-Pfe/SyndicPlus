import mongoose from "mongoose";

const paiementSchema =  new mongoose.Schema({
    codedeCarte:Number,
    montant:String,
})

const Paiement = mongoose.model('paiement', paiementSchema);
export default Paiement