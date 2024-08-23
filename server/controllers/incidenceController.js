import Incidence from '../models/incidence.js';

export const getALLIncidences = async (request, response) => {
    try {
        const incidences = await Incidence.find();
        response.status(200).json(incidences);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
}

export const getIncidenceById = async (req, res) => {
    try {
        const { id } = req.params;
        const incidence = await Incidence.findById(id);
        if (!incidence) {
            return res.status(404).json({ error: 'Incidence not found' });
        }
        res.status(200).json(incidence);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const creatIncidence = async (req, res) => {
    try {
        const incidence = new Incidence(req.body);
        const savedIncidence = await incidence.save();
        res.status(201).json(savedIncidence);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateIncidence = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedIncidence = await Incidence.findByIdAndUpdate(id, req.body);
        if (!updatedIncidence) {
            return res.status(404).json({ error: 'Incidence not found' });
        }
        res.status(200).json(updatedIncidence);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteIncidence = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedIncidence = await Incidence.findByIdAndDelete(id);
        if (!deletedIncidence) {
            return res.status(404).json({ error: 'Incidence not found' });
        }
        res.status(204).send(); // No content to send back
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
