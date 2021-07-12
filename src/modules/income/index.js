const router = require('express').Router();
const { DELETE } = require('./controller.js') 

router.route('/income/delete/:incomeId')
      .get( DELETE )

module.exports = router;