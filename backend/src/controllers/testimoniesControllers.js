const { getTestimonies } = require('../models/testimoniesModels');

const getAllTestimonies = async (req, res) => {
  try {
    const [data] = await getTestimonies();

    res.status(200).send({
      message: 'GET all testimonies success',
      data: data
    })
  } catch (error) {
    return res.send({
      message: 'server error',
      serverMessage: error.message
    })
  }
}

module.exports = { getAllTestimonies }