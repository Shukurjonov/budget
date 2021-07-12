const DELETE_EXPENSE = `
DELETE expense 
WHERE expense_id = $1
`;

module.exports = { DELETE_EXPENSE }