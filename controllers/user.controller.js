/* eslint-disable class-methods-use-this */
import _ from 'lodash';
import bcrypt from 'bcrypt';
import UserService from '../services/user.service.js';

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

        newUser.save()
            .then(() => {
                res.status(200).send({
                    success: true,
                    message: 'user has been created',
                    body: newUser
                });
            })
            .catch((e) => {
                res.status(404).send(e);
            });
    }

    async find(req, res) {
        const data = await UserService.fetch();
        return res.status(201).send({
            status: true,
            body: data
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
        return res.status(201).send({
            success: true,
            message: 'User has been logged in'
        });
    }
}

export default new UserController();
