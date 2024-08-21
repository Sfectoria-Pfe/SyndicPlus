import express from 'express';
import { creatProprietaire, deleteProprietaire, getALLProprietaire, getProprietaireById } from '../controllers/proprietaireControllers.js';


const router = express.Router()

router.get('/getproprietaire', getALLProprietaire);
router.get('/getproprietaire/:id', getProprietaireById);
router.post('/getproprietaire', creatProprietaire);
router.delete('/deleteProprietaire/:id', deleteProprietaire);

export default router;