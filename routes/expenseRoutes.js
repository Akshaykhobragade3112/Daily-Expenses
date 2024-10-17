// routes/expenseRoutes.js
const express = require('express');
const { addExpense, getUserExpenses, getOverallExpenses } = require('../controllers/expenseController');
const router = express.Router();

router.post('/', addExpense);
router.get('/user/:userId', getUserExpenses);
router.get('/overall', getOverallExpenses);

module.exports = router;
