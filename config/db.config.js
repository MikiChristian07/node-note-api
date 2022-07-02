/* eslint-disable import/extensions */
import mongoose from 'mongoose';
import { logger } from '../app.js';

const dbConn = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            logger.info('Connected to the database...');
        })
        .catch((error) => {
            logger.info('Error connecting to the databse');
            logger.error(error);
        });
};

export default dbConn;
