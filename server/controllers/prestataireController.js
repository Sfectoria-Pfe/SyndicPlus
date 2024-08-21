import Prestataire from '../models/prestataire.js';


export const getALLPrestataire = async (request, response) => {
    try {
        const prestataire = await Prestataire.find();
        response.status(200).json(prestataire);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
}

export const getPrestataireById = async (req, res) => {
    try {
        const { id } = req.params
        const prestataire = await Prestataire.findById(id);
        if (!prestataire) {
            return res.status(404).json({ error: 'prestataire not found' });
        }
        res.status(200).json(prestataire);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const creatPrestaire = async (req, res) => {
    try {
        const prestataire = new Prestataire(req.body);
        const savedPrestataire = await prestataire.save();
        res.status(201).json(savedPrestataire);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deletePrestataire = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPrestataire = await Prestataire.findByIdAndDelete(id);
        if (!deletedPrestataire) {

            return res.status(404).json({ error: 'prestataire not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
