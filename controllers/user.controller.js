/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import _ from 'lodash';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserService from '../services/user.service.js';
import generateAccessToken from '../middlewares/auth.middleware.js';

dotenv.config();

class UserController {
    async create(req, res) {
        // find the email of the user
        const user = await UserService.findByEmail(req.body.email);

        if (!_.isEmpty(user)) {
            return res.status(409).send({
                success: false,
                message: 'This user already exists'
            });
        }

        // First hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        // take in the email and password from the body
        const data = { email: req.body.email, password: hashedPassword };
        const newUser = await UserService.create(data);

        return res.status(200).send({
            success: true,
            message: 'user has been created',
            body: { ...newUser.toJsON() }
        });
    }

    async find(req, res) {
        const user = await UserService.fetch();
        return res.status(201).send({
            status: true,
            data: user
        });
    }

    async login(req, res) {
        const { email } = req.body;
        const { password } = req.body;

        const user = await UserService.findByEmail(email);

        if (_.isEmpty(user)) {
            return res.send({
                success: false,
                message: 'Cannot find the user'
            });
        }

        const verifyPassword = await bcrypt.compare(password, user.password);
        if (!verifyPassword) {
            return res.status(400).send({
                success: false,
                message: 'Invalid Email or password'
            });
        }

        const accessToken = generateAccessToken(user.toJSON());
        const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_TOKEN_SECRET);

        return res.header('accessToken', accessToken).status(201).send({
            success: true,
            message: 'User has been logged in',
            accessToken,
            refreshToken
        });
    }
}

export default new UserController();
