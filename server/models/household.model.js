// import mongoose
const mongoose = require("mongoose");
const UserSchema = require("../models/user.model")
const HouseholdSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required"]
		},
		description: {
			type: String,
			required: [true, "Description is required"]
		},
		// Nested Documents. Ex: friends: [UserSchema]
		users: [UserSchema]
	},
	// Include createdAt & updatedAt
	{ timestamps: true },
);

// "User" will be pluralised and lowercased to be used as your collection.
// Optional third argument can be another string to explicitly choose collection name.
const Household = mongoose.model("Household", HouseholdSchema);

module.exports = Household;