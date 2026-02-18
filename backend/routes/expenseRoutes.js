import express from "express";
import {
  createExpense,
  getExpenses,
} from "../controllers/expenseController.js";
import { validateExpense } from "../middlewares/validateExpense.js";

const router = express.Router();

router.post("/", validateExpense, createExpense);
router.get("/", getExpenses);

export default router;
