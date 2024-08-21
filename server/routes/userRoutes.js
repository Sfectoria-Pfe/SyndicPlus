import express from 'express';
import { creatUser, deleteUser, getALLUsers, getUserById } from '../controllers/userController.js';


const router = express.Router()

router.get('/getusers', getALLUsers);
router.get('/getuser/:id', getUserById);
router.post('/getusers', creatUser);
router.delete('/deleteUser/:id', deleteUser);

export default router;