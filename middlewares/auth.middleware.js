import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
// eslint-disable-next-line consistent-return
// function authenticateToken(req, res, next) {
//     const authHeader = req.headers.auth || req.headers.authorization;
//     // return res.send(req.headers)
//     const token = authHeader && authHeader.split(' ')[1];
//     if (!token) {
//         return res.status(401).send({
//             success: false,
//             message: 'Invalid token'
//         });
//     }

//     // eslint-disable-next-line consistent-return
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
//         if (err) return res.sendStatus(403);

//         req.user = decoded;
//         next();
//     });
// }
// export default authenticateToken;

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' });
}

export default generateAccessToken;
