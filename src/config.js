const ip = require('./lib/getIp');

const host = ip({internal: false});
const PORT = process.env.PORT || 5400;

const pgConfig = {
  user: 'postgres',
  host: 'localhost', 
  post: 5432,
  password: '1048576',
  database: 'budget'
}

module.exports = {
  host,
  PORT,
  pgConfig
};