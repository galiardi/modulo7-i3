import { Router } from 'express';
import userRouter from './userRouter.js';

const router = Router();

router.use('/usuario', userRouter);

export default router;
