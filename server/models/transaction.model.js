// import mongoose
const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema(
	{
		amount: {
			type: Number,
		},
		type: {
			// Required type String
			type: String
		},
		memo: {
			// Required type String
			type: String
		},
	},
	// Include createdAt & updatedAt
	{ timestamps: true },
);

// "User" will be pluralised and lowercased to be used as your collection.
// Optional third argument can be another string to explicitly choose collection name.
const Transaction = mongoose.model("Transaction", TransactionSchema);

module.exports = Transaction;