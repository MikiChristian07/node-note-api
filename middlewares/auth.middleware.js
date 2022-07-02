import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
function authenticateToken(req, res, next) {
    const authHeader = req.headers.auth || req.headers.authorization;
    // return res.send(req.headers)
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).send({
            success: false,
            message: 'invalide token'
        });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403);

        req.user = decoded;
        next();
    });
}

export default authenticateToken;
