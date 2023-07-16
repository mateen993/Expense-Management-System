import mongoose from "mongoose";    

const TransactionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    amount: {
        type: Number,
        required: [true, "Amount is required"],
        
    },
    category: {
        type: String,
        required: [true, "Category is required"],

    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User is required to make a transaction"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    date: {
        type: Date,
        required: [true, "Date is required"]
    }
}, {
    timeStamps: true,
})

const Transaction = mongoose.model('Transaction', TransactionSchema);
export default Transaction