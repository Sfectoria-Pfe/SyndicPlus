import Locataire from '../models/locataire.js';


export const getALLLocataires = async (request, response) => {
    try {
        const locataires = await Locataire.find();
        response.status(200).json(locataires);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
}

export const getLocataireById = async (req, res) => {
    try {
        const { id } = req.params
     
        
        const locataire = await Locataire.findById(id);
        if (!locataire) {
            return res.status(404).json({ error: 'locataire not found' });
        }
        res.status(200).json(locataire);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const creatLocataire = async (req, res) => {
    try {
        const locataire = new Locataire(req.body);
        const savedLocataire = await locataire.save();
        res.status(201).json(savedLocataire);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteLocataire = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedLocataire = await User.findByIdAndDelete(id);
        if (!deletedLocataire) {

            return res.status(404).json({ error: 'locataire not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
