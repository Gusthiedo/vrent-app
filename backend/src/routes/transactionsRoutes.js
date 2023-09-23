const express = require("express");
const {
  getAllTransactions,
  getTransactionById,
  insertNewTransaction,
  getTransactionUser,
  updateTransactionById,
} = require("../controllers/transactionsControllers");
const tokenValidation = require("../middleware/tokenValidation");

const router = express.Router();

router.get("/", tokenValidation, getAllTransactions);
router.get("/:id", tokenValidation, getTransactionById);
router.get("/user/:id", tokenValidation, getTransactionUser);
router.post("/create", tokenValidation, insertNewTransaction);
router.put("/update/:id", tokenValidation, updateTransactionById);

module.exports = router;
