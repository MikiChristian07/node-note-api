/* eslint-disable class-methods-use-this */
import { User } from '../models/user.model.js';

class UserService {
    async create(data) {
        // const newnote = await Note.create(data);
        // try {
        const newnote = await User.create(data);
        return newnote;

        // } catch (error) {
        //     return error.message;
        // }
    }
}

export default new UserService();
