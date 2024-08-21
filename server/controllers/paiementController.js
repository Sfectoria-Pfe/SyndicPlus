import Paiment from '../models/paiementenligne.js';


export const getALLPaiement = async (request, response) => {
    try {
        const paiements = await Paiment.find();
        response.status(200).json(paiements);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
}

export const getPaiementById = async (req, res) => {
    try {
        const { id } = req.params
        const paiement = await Paiment.findById(id);
        if (!paiement) {
            return res.status(404).json({ error: 'paiement not found' });
        }
        res.status(200).json(paiement);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const creatPaiement = async (req, res) => {
    try {
        const paiement = new Paiment(req.body);
        const savedPaiement = await paiement.save();
        res.status(201).json(savedPaiement);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deletePaiement = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPaiement = await Paiment.findByIdAndDelete(id);
        if (!deletedPaiement) {

            return res.status(404).json({ error: 'paiement not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
