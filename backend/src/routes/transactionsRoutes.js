const express = require('express');
const { getAllTransactions, getTransactionById, insertNewTransaction } = require('../controllers/transactionsControllers');
const tokenValidation = require('../middleware/tokenValidation');

const router = express.Router();

router.get('/', tokenValidation, getAllTransactions);
router.get('/:id', tokenValidation, getTransactionById);
router.post('/create', tokenValidation, insertNewTransaction);

//bagian siapa?
//membuat controller dan models update transaction
router.put('/update/:id');

module.exports = router;