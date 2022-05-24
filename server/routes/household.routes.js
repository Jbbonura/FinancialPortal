// Import controller
const HouseholdController = require("../controllers/household.controller");

module.exports = app => {
  // READ ALL
  app.get(    "/api/households",     HouseholdController.findAllHouseholds);
  // CREATE
  app.post(   "/api/households",     HouseholdController.createNewHousehold);
  // READ ONE
  app.get(    "/api/households/:id", HouseholdController.findOneSingleHousehold);
  // UPDATE ONE
  app.put(    "/api/households/:id", HouseholdController.updateExistingHousehold);
  // DELETE ONE
  app.delete( "/api/households/:id", HouseholdController.deleteAnExistingHousehold);
};