/* eslint-disable import/extensions */
import express from 'express';
import validateUserSchema from '../validators/user.validator.js';
import validator from '../validators/validator.js';
import UserController from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.get('/', UserController.find);
userRouter.post('/', [validator(validateUserSchema)], UserController.create);
userRouter.post('/login', UserController.login);

export default userRouter;
