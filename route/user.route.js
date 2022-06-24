import express from 'express';
import UserController from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.post('/', UserController.create);
userRouter.post('/login', UserController.login);

export default userRouter;
