// Import Model
const Household = require("../models/household.model");

// Controller function calls using Mongoose to MongoDB
module.exports.findAllHouseholds = (_, res) => {
  Household.find().sort('first_model_field_Asc -second_model_field_Desc')
    .then( households => res.json( households ))
    .catch( err => res.status(401).json( { message: "Something went wrong", err } ));
};

module.exports.findOneSingleHousehold = (req, res) => {
	Household.findOne({ _id: req.params.id })
		.then( oneHousehold => res.json( oneHousehold ))
		.catch( err => res.status(402).json( { message: "Something went wrong", err } ));
};

module.exports.createNewHousehold = (req, res) => {
  Household.create(req.body)
          .then( newHousehold => res.json( newHousehold ))
          .catch( err => res.status(400).json( err ))
};

module.exports.updateExistingHousehold = (req, res) => {
  Household.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then( updatedHousehold => res.json( updatedHousehold ))
    .catch( err => res.status(405).json( { message: "Something went wrong", err } ));
};

module.exports.deleteAnExistingHousehold = (req, res) => {
  Household.deleteOne({ _id: req.params.id })
    .then( delResult => res.json( delResult ))
    .catch( err => res.status(406).json( { message: "Something went wrong", err } ));
};