const mongoose = require("mongoose");
const db = require("../models");
const UserData = require('./UserData.json');
const OwnedPlantData = require('./OwnedPlantData');
// This file empties the Plant collection and inserts the plants below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/plantsy"
);

const seedOwned = async () => {
  try {  
        await db.OwnedPlant
              .deleteMany({})
              .then(() => db.OwnedPlant.collection.insertMany(OwnedPlantData))
              .then(data => {
                console.log(data.result.n + " records inserted!");
                process.exit(0);
              })
              .catch(err => {
                console.error(err);
                process.exit(1);
              });
  } catch (error) {

  }
  process.exit(0);
};

const seedUsers = async () => {
  try {  
        await db.User
              .deleteMany({})
              .then(() => db.User.collection.insertMany(UserData))
              .then(data => {
                console.log(data.result.n + " records inserted!");
                process.exit(0);
              })
              .catch(err => {
                console.error(err);
                process.exit(1);
              });
} catch (error) {

}
process.exit(0);
};
seedOwned();
seedPlants();
seedUsers();
