// Import Model
const Transaction = require("../models/transaction.model");

// Controller function calls using Mongoose to MongoDB
module.exports.findAllTransactions = (_, res) => {
  Transaction.find().sort('first_model_field_Asc -second_model_field_Desc')
    .then( transactions => res.json( transactions ))
    .catch( err => res.status(401).json( { message: "Something went wrong", err } ));
};

module.exports.findOneSingleTransaction = (req, res) => {
	Transaction.findOne({ _id: req.params.id })
		.then( oneTransaction => res.json( oneTransaction ))
		.catch( err => res.status(402).json( { message: "Something went wrong", err } ));
};

module.exports.createNewTransaction = (req, res) => {
  Transaction.create(req.body)
          .then( newTransaction => res.json( newTransaction ))
          .catch( err => res.status(400).json( err ))
};

module.exports.updateExistingTransaction = (req, res) => {
  Transaction.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then( updatedTransaction => res.json( updatedTransaction ))
    .catch( err => res.status(405).json( { message: "Something went wrong", err } ));
};

module.exports.deleteAnExistingTransaction = (req, res) => {
  Transaction.deleteOne({ _id: req.params.id })
    .then( delResult => res.json( delResult ))
    .catch( err => res.status(406).json( { message: "Something went wrong", err } ));
};