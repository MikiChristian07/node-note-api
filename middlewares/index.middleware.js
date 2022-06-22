import express from 'express';
import routes from '../route/index.route.js';
import dbConn from '../config/db.config.js'; 
import error from './error.middleware.js';
import morgan from 'morgan';

/**
 * @description This do one thing onet
 * @param {Express.Application} app express app
 */
const middleware = (app) => {
    dbConn();
    app.use(express.json());
    app.use(morgan('dev'));
    app.use(routes);

    app.use(error);
};

export default middleware;
