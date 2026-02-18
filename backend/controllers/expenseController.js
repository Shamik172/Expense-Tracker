import Expense from "../models/Expense.js";

export const createExpense = async (req, res) => {
  const { amount, category, description, date } = req.body;
  const idempotencyKey = req.headers["idempotency-key"] || Date.now().toString();

  const existing = await Expense.findOne({ idempotencyKey });
  if (existing) return res.status(200).json(existing);

  const expense = await Expense.create({
    amount,
    category,
    description,
    date,
    idempotencyKey,
  });

  res.status(201).json(expense);
};

export const getExpenses = async (req, res) => {
  const { category, sort } = req.query;

  let query = {};
  if (category) query.category = category;

  let expenses = Expense.find(query);

  if (sort === "date_desc") expenses = expenses.sort({ date: -1 });

  const data = await expenses;
  res.json(data);
};
