const User = require ("../models/auth.model.js");
const Plan = require ("../models/plan.model.js");

const getAllUsers = async (req, res) => {

   try {

      const users = await User.find();

      res.status(200).json(users);

   } catch (error) {

      res.status(500).json({
         message: error.message
      });

   }

};

const getPlans = async (req, res) => {

   try {

      const plans = await Plan.find();

      res.status(200).json(plans);

   } catch (error) {

      res.status(500).json({
         message: error.message
      });

   }

};

 const createPlan = async (req, res) => {

   try {

      const newPlan = await Plan.create(req.body);

      res.status(201).json(newPlan);

   } catch (error) {

      res.status(500).json({
         message: error.message
      });

   }

};

const deletePlan = async (req, res) => {

   try {

      await Plan.findByIdAndDelete(req.params.id);

      res.status(200).json({
         message: "Plan deleted"
      });

   } catch (error) {

      res.status(500).json({
         message: error.message
      });

   }

};

module.exports = {getAllUsers, getPlans, createPlan, deletePlan};