// import mongoose
const mongoose = require("mongoose");

const BankAccountSchema = new mongoose.Schema(
	{
		name: {
			// Required type String
			type: String,
			// Optional required field, optional required statement
			required: [true, "Name is required"],
			
		},
		Type: {
			// Required type String
			type: String,
			// Optional required field, optional required statement
			required: [true, "Transaction is required"],
			
		},
		
		// Nested Documents. Ex: friends: [UserSchema]
		transactions: [TransactionSchema]
	},
	// Include createdAt & updatedAt
	{ timestamps: true },
);

// "User" will be pluralised and lowercased to be used as your collection.
// Optional third argument can be another string to explicitly choose collection name.
const BankAccount = mongoose.model("BankAccount", BankAccountSchema);

module.exports = BankAccount;