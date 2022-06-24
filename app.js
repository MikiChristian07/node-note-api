/* eslint-disable import/prefer-default-export */
import 'express-async-errors';
import express from 'express';
import pino from 'pino';
import middleware from './middlewares/index.middleware.js';

export const logger = pino();

const app = express();

middleware(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    logger.info(`App is running on the port ${PORT}`);
});
