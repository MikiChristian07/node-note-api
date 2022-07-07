/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import { Token } from '../models/token.model.js';

class TokenService {
    async create(data) {
        const newToken = await Token.create(data);
        return newToken;
    }

    async fetch() {
        const Tokens = await Token.find({});
        return Tokens;
    }

    async findByRefreshToken(token) {
        const refreshToken = await Token.findOne({ token });

        return refreshToken;
    }
}

export default new TokenService();
