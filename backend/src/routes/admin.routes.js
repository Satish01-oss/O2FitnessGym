const express = require ("express");
const router = express.Router();

const {
   getAllUsers,
   getPlans,
   createPlan,
   deletePlan
} = require("../controllers/admin.controller.js");

const {authMiddleware} = require ("../middlewares/auth.middleware.js");
const isAdmin = require ("../middlewares/isAdmin.middleware.js");


router.get(
   "/users",
   authMiddleware,
   isAdmin,
   getAllUsers
);

router.get(
   "/plans",
   authMiddleware,
   isAdmin,
   getPlans
);

router.post(
   "/plans",
   authMiddleware,
   isAdmin,
   createPlan
);

router.delete(
   "/plans/:id",
   authMiddleware,
   isAdmin,
   deletePlan
);

module.exports = router;