import express from 'express';
import { creatLocataire, deleteLocataire, getALLLocataires, getLocataireById } from '../controllers/locataireController.js';



const router = express.Router()

router.get('/getlocataire', getALLLocataires);
router.get('/onelocataire/:id', getLocataireById);
router.post('/addlocataire', creatLocataire);
router.delete('/deleteLocataire/:id', deleteLocataire);

export default router;