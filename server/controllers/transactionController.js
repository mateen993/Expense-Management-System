import Transaction from "../models/transactionModel.js"

export const getAllTransactions = async (req,res) => {
    try{
        const transactions = await Transaction.find({})

        return res.status(200).json({
            status: 'ok',
            results: transactions.length,
            transactions: transactions

        })

    }
    catch(error){
        res.status(500).json({
            status: 'failed',
            message: error.message
        })
    }
}
