const { getCars, getCar } = require('../models/carsModels');

const getAllCars = async (req, res) => {
  try {
    const [data] = await getCars();

    res.status(200).send({
      message: 'GET all data cars success',
      data: data
    });
  } catch (error) {
    return res.send({
      message: 'server error',
      serverMessage: error.message
    });
  }
}

const getCarById = async (req, res) => {
  try {
    const {id} = req.params

    const [data] = await getCar(id);

    if(data.length === 0) {
      return res.status(404).send({
        message: 'Car not found..'
      });
    }

    res.status(200).send({
      message: 'GET Car by Id success',
      data: data
    });
  } catch (error) {
    return res.send({
      message: 'server error',
      serverMessage: error.message
    });
  } 
}

module.exports = { getAllCars, getCarById }