const router = require('express').Router();
const { GET, POST } = require('./controller.js') 

router.route('/')
      .get(GET)
      .post(POST)

module.exports = router;