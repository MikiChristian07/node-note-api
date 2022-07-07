import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
// eslint-disable-next-line consistent-return
function authenticateToken(req, res, next) {
    const authHeader = req.headers.auth || req.headers.authorization;
    // return res.send(req.headers)
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).send({
            success: false,
            message: 'Invalid token'
        });
    }

    // eslint-disable-next-line consistent-return
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.sendStatus({ success: false, message: err.message });

        req.user = decoded;
        next();
    });
}
// export default ;

function generateAccessToken(user) {
    // {  }

    return jwt.sign({ _id: user._id, email: user.email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2min' });
}

export default {
    generateAccessToken,
    authenticateToken
};
