const { expense, income, totalIncome, totalExpense, insertExpense, insertIncome} = require('./model.js');

const GET = async (req, res) => {
  res.render('index.html', {
    expense: await expense(), 
    income: await income(), 
    totalIncome: await totalIncome(),
    totalExpense: await totalExpense() });
};


const POST = async (req, res) => {
  let {select} = req.body;
  try {
    let result;
    if (select == 'inc')
      result = await insertIncome(req.body)
    else  
      result = await insertExpense(req.body)
      res.redirect('/')
  } catch(error) {
    res.status(400).json( { message: error.message })
  }

}
module.exports = {GET, POST};