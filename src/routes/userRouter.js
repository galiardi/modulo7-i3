import { Router } from 'express';
import {
  createuser,
  getuser,
  getAllusers,
  updateuser,
  deleteuser,
} from '../controllers/userController.js';

const router = Router();

router.post('/create', createuser);
router.get('/:id', getuser);
router.get('/', getAllusers);
router.put('/:id', updateuser);
router.delete('/:id', deleteuser);

export default router;
