const { fetch, fetchAll } = require('../../lib/postgres.js');
const { DELETE_EXPENSE } = require('./query.js');

const deleteExpense = ( { expenseId } ) => fetch( DELETE_EXPENSE, expenseId );

module.exports = { 
  deleteExpense
};