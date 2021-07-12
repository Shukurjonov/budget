const router = require('express').Router();
const { DELETE } = require('./controller.js') 

router.route('/expense/delete/:expenseId')
      .get( DELETE )

module.exports = router;