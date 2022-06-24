/* eslint-disable class-methods-use-this */
import _ from 'lodash';
import UserService from '../services/user.service.js';

class UserController {
    async create(req, res) {
        // take in the email and password from the body
        const data = { email: req.body.email, password: req.body.password };
        // find the email of the user
        const user = await UserService.findByEmail(req.body.email);

        if (!_.isEmpty(user)) {
            return res.status(409).send({
                success: false,
                message: 'This user already exists'
            });
        }

        const newUser = await UserService.create(data);

        const token = 'tokens';
        return res.status(201).send({
            success: true,
            message: 'user has been created',
            body: newUser
        });
    }

    async login(req, res) {
        const { email } = req.body;
        const { password } = req.body;

        const user = await UserService.findByEmail(email);

        if (_.isEmpty(user)) {
            return res.send({
                success: false,
                message: 'Invalid email or password'
            });
        }

        if (user.password !== password) {
            return res.status(400).send({
                success: true,
                message: 'success',
                data: token
            });
        }

        return res.status(201).send({
            success: true,
            message: 'User has been logged in'
        });
    }
}

export default new UserController();
