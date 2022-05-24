// Import controller
const TransactionController = require("../controllers/transaction.controller");

module.exports = app => {
  // READ ALL
  app.get(    "/api/transactions",     TransactionController.findAllTransactions);
  // CREATE
  app.post(   "/api/transactions",     TransactionController.createNewTransaction);
  // READ ONE
  app.get(    "/api/transactions/:id", TransactionController.findOneSingleTransaction);
  // UPDATE ONE
  app.put(    "/api/transactions/:id", TransactionController.updateExistingTransaction);
  // DELETE ONE
  app.delete( "/api/transactions/:id", TransactionController.deleteAnExistingTransaction);
};