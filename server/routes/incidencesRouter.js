import express from 'express';
import { creatIncidence, deleteIncidence, getALLIncidences, getIncidenceById, updateIncidence } from '../controllers/incidenceController.js';



const router = express.Router()

router.get('/getincidence', getALLIncidences);
router.get('/oneincidence/:id', getIncidenceById);
router.post('/addincidence', creatIncidence);
router.put('/updateincidence/:id', updateIncidence);
router.delete('/deleteincidence/:id', deleteIncidence);

export default router;