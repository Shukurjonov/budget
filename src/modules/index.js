const homeRouter = require('./home')
const expenseRouter = require('./expense')
const incomeRouter = require('./income')

module.exports = [ 
  homeRouter,
  expenseRouter,
  incomeRouter
]