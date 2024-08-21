import Proprietaire from '../models/proprietaire.js';


export const getALLProprietaire = async (request, response) => {
    try {
        const proprietaires = await Proprietaire.find();
        response.status(200).json(proprietaires);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
}

export const getProprietaireById = async (req, res) => {
    try {
        const { id } = req.params
        const proprietaire = await Proprietaire.findById(id);
        if (!proprietaire) {
            return res.status(404).json({ error: 'proprietaire not found' });
        }
        res.status(200).json(proprietaire);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const creatProprietaire = async (req, res) => {
    try {
        const proprietaire = new Proprietaire(req.body);
        const savedProprietaire = await proprietaire.save();
        res.status(201).json(savedProprietaire);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteProprietaire = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProprietaire = await Proprietaire.findByIdAndDelete(id);
        if (!deletedProprietaire) {

            return res.status(404).json({ error: 'proprietaire not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
