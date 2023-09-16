const jwt = require('jsonwebtoken');

const tokenValidation = async (req, res, next) => {
  try {
    const jwtToken = req.headers['authorization'];

    if(!jwtToken){
      return res.status(400).send({
        message: 'no token provided'
      });
    }

    const isValid = jwt.verify(jwtToken.split(' ')[1], process.env.JWT_SECRET);

    if(!isValid) {
      return res.status(403).send({
        message: 'failed to authentication token. forbidden to access'
      });
    }

    req.user = isValid;

    next();
  } catch (error) {
    return res.send({
      message: 'error found',
      data: error.message
    })
  }
}

module.exports = tokenValidation;