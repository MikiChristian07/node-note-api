/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import _ from 'lodash';
import TokenService from '../services/token.service.js';
import Auth from '../middlewares/auth.middleware.js';
// import jwt from 'jsonwebtoken'

dotenv.config();

class TokenController {
    // refresh access
    async create(req, res) {
        const refToken = req.body.token;
        // decoded
        // return res.send('refreshToken')
        const refreshTokens = await TokenService.findByRefreshToken(refToken);

        if (_.isEmpty(refreshTokens)) {
            return res.status(403).send({
                success: false,
                message: 'invalid refresh token...Pls login'
            });
        }

        const user = jwt.verify(refreshTokens.token, process.env.REFRESH_TOKEN_SECRET);

        const accessToken = Auth.generateAccessToken(user);

        return res.header('refrestToken', refToken).status(200).send({
            success: true,
            data: { accessToken, refreshToken: refToken, user }
        });
    }
}

export default new TokenController();
