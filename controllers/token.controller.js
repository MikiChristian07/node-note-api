/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import TokenService from '../services/token.service.js';
import generateAccessToken from '../middlewares/auth.middleware.js';

dotenv.config();

class TokenController {
    async create(req, res) {
        const data = { title: req.body.token };
        const newToken = await TokenService.create(data);
        const refreshTokens = await TokenService.fetch();
        if (newToken == null) return res.sendStatus(403);
        if (!refreshTokens.includes(data.title)) return res.sendStatus(403);

        const verify = jwt.verify(newToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
            if (err) return res.status(403);
            const accessToken = generateAccessToken({ name: user.name });
            return res.json(accessToken);
        });

        return verify;
    }
}

export default new TokenController();
