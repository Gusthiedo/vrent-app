const dbPool = require('../config/database');

const getTestimonies = () => {
  const query = 'SELECT users.id_user, users.name, users.user_img, testimoni.comment FROM testimoni INNER JOIN users ON testimoni.user_id=users.id_user';

  return dbPool.execute(query);
}

module.exports = { getTestimonies }