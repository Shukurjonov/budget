const { fetch, fetchAll } = require('../../lib/postgres.js');
const { EXPENSES, INCOME, TOTALINCOME, TOTALEXPENSE, INSERTEXPENSE, INSERTINCOME } = require('./query.js');

const expense = () => fetchAll( EXPENSES );
const income = () => fetchAll( INCOME );
const totalIncome = () => fetch( TOTALINCOME );
const totalExpense = () => fetch( TOTALEXPENSE );
const insertExpense = ( { purpose, cost } ) => fetch( INSERTEXPENSE, purpose, +cost );
const insertIncome = ( { purpose, cost } ) => fetch( INSERTINCOME, purpose, +cost );



module.exports = { 
  expense, 
  income, 
  totalIncome, 
  totalExpense,
  insertExpense,
  insertIncome
};