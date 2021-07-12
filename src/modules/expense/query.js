const DELETE_EXPENSE = `
DELETE FROM expense 
WHERE expense_id = $1;
`;

module.exports = { DELETE_EXPENSE }