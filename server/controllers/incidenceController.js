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
        const { id } = req.params
        const incidence = await Incidence.findById(id);
        if (!incidence) {
            return res.status(404).json({ error: 'incidence not found' });
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

export const deleteIncidence = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedIncidence = await Incidence.findByIdAndDelete(id);
        if (!deletedIncidence) {

            return res.status(404).json({ error: 'incidence not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
