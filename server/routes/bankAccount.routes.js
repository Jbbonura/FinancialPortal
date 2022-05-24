// Import controller
const BankAccountController = require("../controllers/bankAccount.controller");

module.exports = app => {
  // READ ALL
  app.get(    "/api/bankAccounts",    BankAccountController.findAllBankAccounts);
  // CREATE
  app.post(   "/api/bankAccounts",     BankAccountController.createNewBankAccount);
  // READ ONE
  app.get(    "/api/bankAccounts/:id", BankAccountController.findOneSingleBankAccount);
  // UPDATE ONE
  app.put(    "/api/bankAccounts/:id", BankAccountController.updateExistingBankAccount);
  // DELETE ONE
  app.delete( "/api/bankAccounts/:id", BankAccountController.deleteAnExistingBankAccount);
};