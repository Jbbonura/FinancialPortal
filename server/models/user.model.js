// import mongoose
const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
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
			validate: {
			validator: val => /^([\w-\.]+@([\w-]\.)+[\w-]+)?$/.test(val),
			message: "Please enter a valid email"
			}
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
// Create a temporary confrim passwrod attribute in our schema
UserSchema.virtual('confirmPassword')
	.get(() => this._confirmPassword)
	.set(value => this._confirmPassword = value);

// Create validations for the confirm password
UserSchema.pre("validate", function(next){
	if(this.password !== this.confirmPassword){
		this.invalidate("confirmPassword", "Passwords must match")
	}
	next()
})
// Before saving the suer, swap out password with hashed password
UserSchema.pre("save", function(next){
	bcrypt.hash(this.password, 10)
		.then(hashedPassword => {
			this.password = hashedPassword
			next()
		})
})

// "User" will be pluralised and lowercased to be used as your collection.
// Optional third argument can be another string to explicitly choose collection name.
const User = mongoose.model("User", UserSchema);

module.exports = User;