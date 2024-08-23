import express from 'express';
import { creatPrestaire, deletePrestataire, getALLPrestataire, getPrestataireById, updatePrestataire } from '../controllers/prestataireController.js';




const router = express.Router()

router.get('/getprestataire', getALLPrestataire);
router.get('/getprestataire/:id', getPrestataireById);
router.post('/addprestataire', creatPrestaire);
router.put('/updateprestataire/:id', updatePrestataire);
router.delete('/deleteprestataire/:id', deletePrestataire);

export default router;