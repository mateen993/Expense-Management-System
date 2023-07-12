import generateToken from "../config/generateToken.js";
import User from "../models/userModel.js"
import bcrypt from 'bcrypt'

export const login = async (req,res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user) {
            return res.status(404).json({
                status: 'failed',
                message: 'User not found'
            })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password)  
        console.log(isPasswordMatch)  
        if(!isPasswordMatch) {
            return res.status(401).json({
                status: 'failed',
                message: 'Incorrect Email or Password'
            })
        }

        const token = generateToken(user._id)
        res.status(200).json({
            status: 'ok',
            email,
            token: token
        })
        
    } catch (error) {
        return res.status(500).json({
            status: 'failed',
            message: "Internal Server Error",
        })
    }
}

export const signup = async (req,res) => {
    try {
        const {email, password,name} = req.body;
        if (!(email && password && name)) {
            return res.status(400).json({
                status: 'failed',
                message: "All inputs are required"
            });
          }
        const oldUser = await User.findOne({email: email})

        if(oldUser) {
            return res.status(409).json({
                status: 'failed',
                message: 'User already exists. Please Login'
            })
        }

        const hashedPassword = await bcrypt.hash(password,10);
        const user = await User.create({
            name: name,
            email: email.toLowerCase(),
            password: hashedPassword
        });
        const token = generateToken(user._id);

        res.status(201).json({
            status: 'ok',
            user,
            token,
        })

        
        
    } catch (error) {
        return res.status(500).json({
            status: 'failed',
            message: "Internal Server Error",
        })
        
    }

}

