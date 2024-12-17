import { Schema, model, models } from "mongoose";

const TransactionSchema = new Schema({
    date: {
        type: String,
        required: [true, 'Date is required!']
    },
    category: {
        type: String,
        required: [true, 'Category is required!']
    },
    mode: {
        type: String,
        required: [true, 'Mode is required!']
    },
    amount: {
        type: Number,
        required: [true, 'Amount is required!']
    }
}, {timestamps: true});

const Transaction = models.Transaction || model('Transaction', TransactionSchema);
export default Transaction;