// controllers/expenseController.js
const Expense = require('../models/Expense');
const User = require('../models/User');

// Add Expense
const addExpense = async (req, res) => {
  const { description, totalAmount, paidBy, participants } = req.body;

  try {
    const expense = new Expense({ description, totalAmount, paidBy, participants });
    await expense.save();
    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get Expense
const getUserExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ 'participants.user': req.params.userId });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get Overall Expenses
const getOverallExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { addExpense, getUserExpenses, getOverallExpenses };
