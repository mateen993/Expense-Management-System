import jwt from 'jsonwebtoken';

const generateToken = (id) => {

    return jwt.sign({user_id: id}, process.env.SECRET_KEY, {
        expiresIn: process.env.EXPIRES_IN
    })
}

export default generateToken