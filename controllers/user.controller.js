/* eslint-disable class-methods-use-this */
import UserService from '../services/user.service.js';

class UserController {
    async create(req, res) {
        // return res.send('I have reache the note create()')
        // throw new Error('Testing throwing errors');
        const data = { email: req.body.email, password: req.body.password };
        const newUser = await UserService.create(data);
        return res.status(201).send({ status: true, body: newUser });
    }

    // async login() {

    // }
}

export default new UserController();
