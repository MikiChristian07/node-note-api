/* eslint-disable import/extensions */
import express from 'express';
import noteRouter from './note.route.js';
import userRouter from './user.route.js';
import tokenRouter from './token.route.js';

const router = express.Router();

router.use('/notes', noteRouter);
router.use('/users', userRouter);
router.use('/token', tokenRouter);

export default router;
