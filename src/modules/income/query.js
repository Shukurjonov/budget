const DELETE_INCOME = `
DELETE FROM income 
WHERE income_id = $1;
`;

module.exports = { DELETE_INCOME }