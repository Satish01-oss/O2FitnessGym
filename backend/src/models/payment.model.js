const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    plan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Plan",
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        enum: ["pending", "completed", "failed"],
        default: "pending"
    },

    paymentMethod: {
        type: String,
        default: "Razorpay"
    },

    transactionId: {
        type: String
    },
    expiryDate: {
        type: Date
    },

}, { timestamps: true });

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;