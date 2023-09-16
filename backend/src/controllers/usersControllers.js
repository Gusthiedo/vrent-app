const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { insertNewUser, getUser } = require('../models/usersModels');

const createUser = async (req, res) => {
  try {
    const { name, email, password, no_hp } = req.body;

    if(!name || !email || !password) {
      return res.status(400).send({
        message: 'some field must be filled, cannot be empty'
      });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    await insertNewUser(name, email, hashedPassword, no_hp);

    return res.status(201).send({
      message: 'new user created',
      data: {
        name: name,
        email: email,
        password: hashedPassword,
        no_hp: no_hp
      }
    })
  } catch (error) {
    return res.send({
      message: 'server error',
      serverMessage: error
    })
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if(!email || !password) {
      return res.status(400).send({
        message: 'some field must be filled, cannot be empty'
      });
    }

    const [data] = await getUser(email);

    if(data.length === 0) {
      return res.status(404).send({
        message: `email ${email} not found`
      })
    }

    if(!data[0].password) {
      return res.status(404).send({
        message: 'password not found'
      })
    }
    
    const isValidPassword = await bcrypt.compare(password, data[0].password.trim());
    console.log(isValidPassword);
    if(!isValidPassword) {
      return res.status(401).send({
        message: 'invalid password'
      })
    }

    const token = jwt.sign({
      id: data[0].id_user,
      name: data[0].name,
      email: data[0].email
    }, process.env.JWT_SECRET, { expiresIn: 3600 })

    return res.status(200).send({
      message: 'login success',
      token: token
    });

  } catch (error) {
    return res.send({
      message: 'server error',
      serverMessage: error.message
    });
  }
}

module.exports = {
  createUser,
  login
}