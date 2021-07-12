const { deleteExpense } = require('./model.js');

const DELETE = async (req, res) => {
  try {
    result = await deleteExpense(req.params);
    res.redirect('/')
  } catch(error) {
    res.status(400).json( { message: error.message })
  }
};


module.exports = { DELETE };