import express from 'express';
import { creatPaiement, deletePaiement, getALLPaiement, getPaiementById } from '../controllers/paiementController.js';


const router = express.Router()

router.get('/getpaiement', getALLPaiement);
router.get('/getpaiement/:id', getPaiementById);
router.post('/getpaiement', creatPaiement);
router.delete('/deletePaiement/:id', deletePaiement);

export default router;