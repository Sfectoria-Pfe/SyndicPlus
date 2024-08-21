import mongoose from "mongoose";

const incidenceSchema =  new mongoose.Schema({
    name:String,
    nbredeEtage:Number,
    descriptiondudegat:String,
    avatar:String,
    status:String,
})

const Incidence = mongoose.model('incidence', incidenceSchema);
export default Incidence