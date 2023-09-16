const dbPool = require('../config/database');

const insertNewUser = (name, email, password, no_hp) => {
  const query = `INSERT INTO users (name, email, password, no_hp) VALUES('${name}', '${email}',' ${password}', '${no_hp}')`;

  return dbPool.execute(query);
}

const getUser = (email) => {
  const query = `SELECT * FROM users WHERE email = '${email}'`;

  return dbPool.execute(query);
}

module.exports = {
  insertNewUser,
  getUser
}