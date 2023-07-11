import mongoose from "mongoose";    
import colors from 'colors'

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_OLD,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
              }
        )
        console.log("Connected to database")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }

}

export default connectToDB