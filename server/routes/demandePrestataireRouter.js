import express from 'express';
import { acceptPrestataire, createDemandePrestaire, getALLdemandePrestataire, getdemandePrestataireById, refusePrestataire } from '../controllers/demandePrestataireController.js';





const router = express.Router()

router.get('/getdemandeprestataire', getALLdemandePrestataire);
router.get('/getdemandeprestataire/:id', getdemandePrestataireById);
router.post('/addDemandeprestataire', createDemandePrestaire);
router.post('/acceptdemandeprestataire/:id', acceptPrestataire);
router.put('/refusedemandeprestataire/:id', refusePrestataire);

export default router;