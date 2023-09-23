const dbPool = require('../config/database');

const getTransactions = () => {
  const query = 'SELECT transactions.id_transaction, cars.name AS car_name, cars.type AS car_type, cars.price, users.name AS customer, users.email, transactions.created_at, transactions.status FROM transactions JOIN cars ON transactions.car_id=cars.id_car JOIN users ON transactions.user_id=users.id_user';

  return dbPool.execute(query);
}

const getTransaction = (id) => {
  const query = `SELECT transactions.id_transaction, cars.name AS car_name, cars.type AS car_type, cars.price, transactions.pickup_date, transactions.pickoff_date, transactions.pickup_location, transactions.pickoff_location, users.name AS customer, users.email, users.no_hp, transactions.pickup_time, transactions.pickoff_time, transactions.created_at, transactions.status FROM transactions JOIN cars ON transactions.car_id=cars.id_car JOIN users ON transactions.user_id=users.id_user WHERE id_transaction = '${id}'`;

  return dbPool.execute(query);
}

const createTransaction = (car_id, pickup_date, pickoff_date, pickup_location, pickoff_location, user_id, pickup_time, pickoff_time) => {
  const query = `INSERT INTO transactions (car_id, pickup_date, pickoff_date, pickup_location, pickoff_location, user_id, pickup_time, pickoff_time) VALUES (${car_id}, '${pickup_date}', '${pickoff_date}', '${pickup_location}', '${pickoff_location}', ${user_id}, '${pickup_time}', '${pickoff_time}')`;

  return dbPool.execute(query);
}

const userTransaction = (id) => {
  const query = ` SELECT * FROM transactions INNER JOIN users ON transactions.user_id=users.id_user
                  WHERE user_id=${id}`;

  return dbPool.execute(query);
}

const update = (statusUpdate, id) => {
  const query = `UPDATE transactions SET status='${statusUpdate}' WHERE id_transaction=${id}`

  return dbPool.execute(query);
}

module.exports = { getTransactions, getTransaction, createTransaction, userTransaction, update }