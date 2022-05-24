// import mongoose
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		name: {
			// Required type String
			type: String,
			// Optional required field, optional required statement
			required: [true, "Name is required"],
			
		},
		email: {
			// Required type String
			type: String,
			// Optional required field, optional required statement
			required: [true, "Email is required"],
			
		},
		password: {
			// Required type String
			type: String,
			// Optional required field, optional required statement
			required: [true, "Password is required"],
			// Optional minimum string length, optional minlength statement
			minlength: [3, "Password must be at least 4 characters"],
			
		},
		// Generic number key field
		role: {
			type: Number,
			
		},
		// Nested Documents. Ex: friends: [UserSchema]
		bankAccounts: [BankAccountSchema]
	},
	// Include createdAt & updatedAt
	{ timestamps: true },
);

// "User" will be pluralised and lowercased to be used as your collection.
// Optional third argument can be another string to explicitly choose collection name.
const User = mongoose.model("User", UserSchema);

module.exports = User;