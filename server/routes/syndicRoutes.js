import express from 'express';
import { creatSyndic, deleteSyndic, getALLSyndic, getSyndicById } from '../controllers/syndicControllers.js';


const router = express.Router()

router.get('/getusers', getALLSyndic);
router.get('/getuser/:id', getSyndicById);
router.post('/getusers', creatSyndic);
router.delete('/deleteUser/:id', deleteSyndic);

export default router;