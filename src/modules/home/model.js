const { fetch, fetchAll } = require('../../lib/postgres.js');
const { EXPENSES, INCOME, TOTALINCOME, TOTALEXPENSE } = require('./query');

const expense = () => fetchAll( EXPENSES );
const income = () => fetchAll( INCOME );
const totalIncome = () => fetch( TOTALINCOME );
const totalExpense = () => fetch( TOTALEXPENSE );



module.exports = { expense, income, totalIncome, totalExpense };