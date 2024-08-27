import Prestataire from '../models/demandePrestataire.js';

// Obtenir tous les prestataires
export const getALLdemandePrestataire = async (request, response) => {
    try {
        const prestataire = await Prestataire.find();
        response.status(200).json(prestataire);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
}

// Obtenir un prestataire par ID
export const getdemandePrestataireById = async (req, res) => {
    try {
        const { id } = req.params;
        const prestataire = await Prestataire.findById(id);
        if (!prestataire) {
            return res.status(404).json({ error: 'Prestataire not found' });
        }
        res.status(200).json(prestataire);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const createDemandePrestaire = async (req, res) => {
    try {
        const prestataire = new Prestataire(req.body);
        const savedPrestataire = await prestataire.save();
        res.status(201).json(savedPrestataire);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
// Accepter un prestataire par ID
export const acceptPrestataire = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedPrestataire = await Prestataire.findByIdAndUpdate(id, { status: 'accepted' }, { new: true });
        if (!updatedPrestataire) {
            return res.status(404).json({ error: 'Prestataire not found' });
        }
        res.status(200).json(updatedPrestataire);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Refuser un prestataire par ID
export const refusePrestataire = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedPrestataire = await Prestataire.findByIdAndUpdate(id, { status: 'refused' }, { new: true });
        if (!updatedPrestataire) {
            return res.status(404).json({ error: 'Prestataire not found' });
        }
        res.status(200).json(updatedPrestataire);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
