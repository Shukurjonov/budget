const { deleteIncome } = require('./model.js');

const DELETE = async (req, res) => {
  try {
    let result = await deleteIncome(req.params);
    res.redirect('/')

  } catch(error) {
    res.status(400).json( { message: error.message })
  }
};


module.exports = { DELETE };