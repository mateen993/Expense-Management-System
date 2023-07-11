import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
        trim: true,
    },
    password: {
        type: String,
        required: [true, "password is required"],
        
    },



}, {
    timeStamps: true
})

const User = mongoose.model('User', UserSchema);
export default User;