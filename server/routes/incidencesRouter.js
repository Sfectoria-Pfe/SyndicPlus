import express from 'express';
import { creatIncidence, deleteIncidence, getALLIncidences, getIncidenceById } from '../controllers/incidenceController.js';



const router = express.Router()

router.get('/getincidence', getALLIncidences);
router.get('/getincidence/:id', getIncidenceById);
router.post('/getincidence', creatIncidence);
router.delete('/deleteincidence/:id', deleteIncidence);

export default router;