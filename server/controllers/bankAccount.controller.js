// Import Model
const BankAccount = require("../models/bankAccount.model");

// Controller function calls using Mongoose to MongoDB
module.exports.findAllBankAccounts = (_, res) => {
  BankAccount.find().sort('first_model_field_Asc -second_model_field_Desc')
    .then( bankAccounts => res.json( bankAccounts ))
    .catch( err => res.status(401).json( { message: "Something went wrong", err } ));
};

module.exports.findOneSingleBankAccount = (req, res) => {
	BankAccount.findOne({ _id: req.params.id })
		.then( oneBankAccount => res.json( oneBankAccount ))
		.catch( err => res.status(402).json( { message: "Something went wrong", err } ));
};

module.exports.createNewBankAccount = (req, res) => {
  BankAccount.create(req.body)
          .then( newBankAccount => res.json( newBankAccount ))
          .catch( err => res.status(400).json( err ))
};

module.exports.updateExistingBankAccount = (req, res) => {
  BankAccount.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then( updatedBankAccount => res.json( updatedBankAccount ))
    .catch( err => res.status(405).json( { message: "Something went wrong", err } ));
};

module.exports.deleteAnExistingBankAccount = (req, res) => {
  BankAccount.deleteOne({ _id: req.params.id })
    .then( delResult => res.json( delResult ))
    .catch( err => res.status(406).json( { message: "Something went wrong", err } ));
};