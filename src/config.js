const ip = require('./lib/getIp');

const host = ip({internal: false});
const PORT = process.env.PORT || 5400;

const pgConfig = {
 connectionString: 'postgres://ixunvmdc:1loKHlEURjgmKW_9olARx_4wyG1NQsKj@batyr.db.elephantsql.com/ixunvmdc'
}

module.exports = {
  host,
  PORT,
  pgConfig
};