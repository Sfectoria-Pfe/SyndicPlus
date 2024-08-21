import express from 'express';
import { creatPrestaire, deletePrestataire, getALLPrestataire, getPrestataireById } from '../controllers/prestataireController.js';




const router = express.Router()

router.get('/getprestataire', getALLPrestataire);
router.get('/getprestataire/:id', getPrestataireById);
router.post('/getprestataire', creatPrestaire);
router.delete('/deleteprestataire/:id', deletePrestataire);

export default router;