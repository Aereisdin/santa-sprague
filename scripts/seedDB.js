const mongoose = require("mongoose");
const db = require("../models");
const UserData = require('./UserData.json');
const ChosenData = require('./ChosenData.json');
//This is the file for seeding the initial data for the Secret Santa Projects

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/sprague-santa"
);

const seedChosen = async () => {
  try {  
        await db.Chosen
              .deleteMany({})
              .then(() => db.Chosen.collection.insertMany(ChosenData))
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
seedChosen();
seedUsers();
