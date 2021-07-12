const EXPENSES = `
SELECT 
  expense_id,
  expense_name,
  expense_cost, 
  TO_CHAR(expense_date, 'yyyy-MM-dd HH24:MI:SS') as expense_date
FROM expense;
`;

const INCOME = `
SELECT 
  income_id,
  income_name,
  income_cost, 
  TO_CHAR(income_date, 'yyyy-MM-dd HH24:MI:SS') as income_date
FROM income;
`;

const TOTALINCOME = `
SELECT 
  sum(income_cost) 
FROM income;
`;

const TOTALEXPENSE = `
SELECT 
  sum(expense_cost) 
FROM expense;
`;

module.exports = { EXPENSES, INCOME, TOTALINCOME, TOTALEXPENSE }