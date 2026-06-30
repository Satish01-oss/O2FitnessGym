const express = require ("express");

const {
   createPayment,
   getAllPayments,
   getMyPayments,
   updatePaymentStatus
} = require("../controllers/payment.controller.js");

const {authMiddleware} = require ("../middlewares/auth.middleware.js");
const isAdmin = require ("../middlewares/isAdmin.middleware.js");

const router = express.Router();



/* USER */
router.post(
   "/create",
   authMiddleware,
   createPayment
);

router.get(
   "/my-payments",
   authMiddleware,
   getMyPayments
);



/* ADMIN */
router.get(
   "/all",
   authMiddleware,
   isAdmin,
   getAllPayments
);

router.put(
   "/update/:id",
   authMiddleware,
   isAdmin,
   updatePaymentStatus
);

module.exports = router;