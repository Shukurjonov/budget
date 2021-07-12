const { fetch, fetchAll } = require('../../lib/postgres.js');
const { DELETE_INCOME } = require('./query.js');

const deleteIncome = ( { incomeId } ) => fetch( DELETE_INCOME, incomeId );

module.exports = { 
  deleteIncome
};