require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.SERVER_PORT || 3001;

const userRouter = require('./routes/usersRoutes');
const carRouter = require('./routes/carsRoutes');
const transactionRouter = require('./routes/transactionsRoutes');
const testimoniRouter = require('./routes/testimoniesRoutes');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({origin: true, credentials: true}));

app.use('/api/users', userRouter);
app.use('/api/cars', carRouter);
app.use('/api/transactions', transactionRouter);
app.use('/api/testimoni', testimoniRouter);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));