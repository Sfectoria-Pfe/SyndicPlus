import express from 'express';
import { createUser, deleteUser, getALLUsers, getUserById } from '../controllers/userController.js';


const router = express.Router()

router.get('/getusers', getALLUsers);
router.get('/oneuser/:id', getUserById);
router.post('/getusers', createUser);
router.delete('/deleteUser/:id', deleteUser);

export default router;