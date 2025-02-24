import User from "./user.js";
import {
    incidenceContent,
    locataireContent,
    paiementContent,
    prestataireContent,
    proprietaireContent,
    syndicContent,
    userContent
} from "../data.js";
import mongoose from "mongoose";
import Locataire from "./locataire.js";
import Proprietaire from "./proprietaire.js";
import Incidence from "./incidence.js";
import Syndic from "./syndic.js";
import Prestataire from "./prestataire.js";
import Paiement from "./paiementenligne.js";


await mongoose.connect("mongodb://localhost:27017/syndicPlus"
).then(() => { console.log("Data base connected successfuly."); }).catch((error) => { console.log("Data base connection failed:", error.message); })

const user = async () => {
    try {
        await User.insertMany(userContent),
            console.log("user seeded")
    } catch (error) {
        console.log(error)
    }
}
user();

const locataire = async () => {
    try {
        await Locataire.insertMany(locataireContent),
            console.log("locataire seeded")
    } catch (error) {
        console.log(error)
    }
}
locataire();

const proprietaire = async () => {
    try {
        await Proprietaire.insertMany(proprietaireContent),
            console.log("proprietaire seeded")
    } catch (error) {
        console.log(error)
    }
}
proprietaire();

const syndic = async () => {
    try {
        await Syndic.insertMany(syndicContent),
            console.log("syndic seeded")
    } catch (error) {
        console.log(error)
    }
}
syndic();

const prestataire = async () => {
    try {
        await Prestataire.insertMany(prestataireContent),
            console.log("prestataire seeded")
    } catch (error) {
        console.log(error)
    }
}
prestataire();

const paiement = async () => {
    try {
        await Paiement.insertMany(paiementContent),
            console.log("paiement seeded")
    } catch (error) {
        console.log(error)
    }
}
paiement();

const incidences = async () => {
    try {
        await Incidence.insertMany(incidenceContent)
        console.log("Incidences seeded")
    } catch (error) {
        console.log(error)
    }

}
incidences();



