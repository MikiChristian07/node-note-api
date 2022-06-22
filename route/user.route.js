import express from 'express';
import UserController from '../controllers/user.controller.js';
import { User } from '../models/user.model.js';

const userRouter = express.Router();

userRouter.post('/', UserController.create);
// userRouter.get('/', UserController.find);
// userRouter.get('/:id', UserController.findbyid);
// userRouter.delete('/:id', UserController.delete);
// userRouter.put('/:id', UserController.update);

export default userRouter;
