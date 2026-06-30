const Payment = require ("../models/payment.model.js");
const Plan = require ("../models/plan.model.js");

/* CREATE PAYMENT */
const createPayment = async (req, res) => {

   try {

      const { planId } = req.body;

      /* FIND PLAN */
      const plan = await Plan.findById(planId);

      if (!plan) {

         return res.status(404).json({
            message: "Plan not found"
         });

      }

      /* CREATE PAYMENT */
      const payment = await Payment.create({

         user: req.user.id,

         plan: plan._id,

         amount: plan.price,

         status: "completed",

         paymentMethod: "Manual"

      });

      res.status(201).json({
         success: true,
         payment
      });

   } catch (error) {

      res.status(500).json({
         message: error.message
      });

   }

};



/* GET ALL PAYMENTS (ADMIN) */
const getAllPayments = async (req, res) => {

   try {

      const payments = await Payment.find()
         .populate("user", "name email")
         .populate("plan", "name price")
         .sort({ createdAt: -1 });

      res.status(200).json(payments);

   } catch (error) {

      res.status(500).json({
         message: error.message
      });

   }

};



/* GET LOGGED-IN USER PAYMENTS */
const getMyPayments = async (req, res) => {

   try {

      const payments = await Payment.find({
         user: req.user.id
      })
         .populate("plan", "name price")
         .sort({ createdAt: -1 });

      res.status(200).json(payments);

   } catch (error) {

      res.status(500).json({
         message: error.message
      });

   }

};



/* UPDATE PAYMENT STATUS */
const updatePaymentStatus = async (req, res) => {

   try {

      const { status } = req.body;

      const payment = await Payment.findById(req.params.id);

      if (!payment) {

         return res.status(404).json({
            message: "Payment not found"
         });

      }

      payment.status = status;

      await payment.save();

      res.status(200).json({
         success: true,
         payment
      });

   } catch (error) {

      res.status(500).json({
         message: error.message
      });

   }

};

module.exports = {createPayment, getAllPayments, getMyPayments, updatePaymentStatus};