const dbPool = require('../config/database');

const getCars = () => {
  const query = 'SELECT * FROM cars';

  return dbPool.execute(query);
}

const getCar = (id) => {
  const query = `SELECT * FROM cars WHERE id_car = '${id}'`;

  return dbPool.execute(query);
}

const getAvailabilityCar = (id) => {
  const query = `SELECT availability FROM cars WHERE id_car=${id}`;

  return dbPool.execute(query);
}

module.exports = { getCars, getCar, getAvailabilityCar }