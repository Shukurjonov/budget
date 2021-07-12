const { expense, income, total, totalIncome, totalExpense } = require('./model.js');

const GET = async (req, res) => {
  res.render('index.html', {
    expense: await expense(), 
    income: await income(), 
    totalIncome: await totalIncome(),
    totalExpense: await totalExpense() });
};

module.exports = {GET};