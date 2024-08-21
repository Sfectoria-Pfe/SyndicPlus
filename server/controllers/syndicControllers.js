import Syndic from '../models/syndic.js';


export const getALLSyndic = async (request, response) => {
    try {
        const syndics = await Syndic.find();
        response.status(200).json(syndics);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
}

export const getSyndicById = async (req, res) => {
    try {
        const { id } = req.params
        const syndic = await Syndic.findById(id);
        if (!syndic) {
            return res.status(404).json({ error: 'syndic not found' });
        }
        res.status(200).json(syndic);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const creatSyndic = async (req, res) => {
    try {
        const syndic = new Syndic(req.body);
        const savedSyndic = await syndic.save();
        res.status(201).json(savedSyndic);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteSyndic = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedSyndic = await User.findByIdAndDelete(id);
        if (!deletedSyndic) {

            return res.status(404).json({ error: 'syndic not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
