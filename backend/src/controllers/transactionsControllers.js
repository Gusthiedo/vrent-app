const { getAvailabilityCar } = require('../models/carsModels');
const { getTransactions, getTransaction, createTransaction, userTransaction, update } = require('../models/transactionsModels');

const getAllTransactions = async (req, res) => {
  try {
    const { email } = req.user;
    const admin = 'admin@mail.com';

    if(email !== admin) {
      return res.status(403).send({
        message: 'you have no access to get api'
      })
    }

    const [data] = await getTransactions();

    res.status(200).send({
      message: 'GET all data transactions success',
      data: data
    })
  } catch (error) {
    return res.send({
      message: 'server error',
      serverMessage: error.message
    });
  }
}

const getTransactionById = async (req, res) => {
  try {
    const { id } = req.params;
    const [data] = await getTransaction(id);

    res.status(200).send({
      message: 'GET all data transactions success',
      data: data
    })
  } catch (error) {
    return res.send({
      message: 'server error',
      serverMessage: error.message
    })
  }
}

const insertNewTransaction = async (req, res) => {
  try {
    const { id } = req.user;
    
    if(!req.user) {
      return res.status(401).send({
        message: 'you have to login to reserve a car'
      })
    }

    const {
      car_id,
      pickup_date,
      pickoff_date,
      pickup_location,
      pickoff_location,
      pickup_time,
      pickoff_time
    } = req.body;

    const [statusCar] = await getAvailabilityCar(car_id);

    if(!car_id || !pickup_date || !pickoff_date || !pickup_location || !pickoff_location || !pickup_time || !pickoff_time) {
      return res.status(400).send({
        message: 'some field must be filled, cannot be empty'
      });
    }
    console.log(statusCar[0].availability);
    if(statusCar[0].availability !== 1) {
      return res.send({
        message: 'cannot reserve! car is not available now'
      })
    }

    await createTransaction(car_id, pickup_date, pickoff_date, pickup_location, pickoff_location, id, pickup_time, pickoff_time);

    return res.status(201).send({
      message: 'new transaction created'
    })

  } catch (error) {
    return res.send({
      message: 'server error',
      serverMessage: error.message
    });
  }
}

const getTransactionUser = async (req, res) => {
  try {
    const { id } = req.params;

    const [data] = await userTransaction(id);

    if(data.length === 0) {
      return res.send({
        message: 'you have not made a transaction yet'
      })
    }

    return res.status(200).send({
      message: 'get user transactions success',
      data: data
    })
  } catch (error) {
    return res.send({
      message: 'server error',
      serverMessage: error.message
    });
  }
}

const updateTransactionById = async (req, res) => {
  try {
    const { email } = req.user;
    const { status } = req.body;
    const { id } = req.params;

    if(email !== 'admin@mail.com') {
     return res.status(403).send({
      message: 'unauthorized'
     });
    }

    await update(status, id);

    res.status(201).send({
      message: 'transaction update success'
    })
  } catch (error) {
    return res.send({
      message: 'server error',
      serverMessage: error.message
    });
  }
}

module.exports = {
  getAllTransactions,
  getTransactionById,
  insertNewTransaction,
  getTransactionUser,
  updateTransactionById
}