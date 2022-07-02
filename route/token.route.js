/* eslint-disable import/extensions */
import express from 'express';
import TokenController from '../controllers/token.controller.js';

const tokenRouter = express.Router();

tokenRouter.post('/', TokenController.create);

export default tokenRouter;
