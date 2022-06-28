/* eslint-disable class-methods-use-this */
import User from '../models/user.model.js';

class UserService {
    async create(data) {
        const newnote = await User.create(data);
        return newnote;
    }

    async findByEmail(email) {
        const users = await User.findOne({ email });
        return users;
    }

    async fetch() {
        const users = await User.find({});
        return users;
    }
}

export default new UserService();
