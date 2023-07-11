import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
import connectToDB from "./config/connectToDB.js";
import userRouter from "./routes/userRoutes.js";
dotenv.config();
 //Creating server
const app = express();
//Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/user', userRouter)

const PORT = process.env.PORT || 5000;
console.log(process.env.MONGO_URI.toString().replace('<password>', process.env.MONGO_PASSWORD))

// mongoose.connect(process.env.MONGO_URI.toString().replace('<password>', process.env.MONGO_PASSWORD), {
//     useUnifiedTopology: true,
//     useNewURLParser: true,
// }).then(`MongoDB connection is established`).catch(err => console.error(err));
connectToDB();

app.listen(PORT, () => {
    console.log(`Server running on ${ process.env.NODE_MODE } and listening on port ${PORT}`.yellow)
});