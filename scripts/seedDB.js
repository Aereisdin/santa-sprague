const mongoose = require("mongoose");
const db = require("../models");
const UserData = require('./UserData.json');
const ChosenData = require('./ChosenData.json');
//This is the file for seeding the initial data for the Secret Santa Projects

mongoose.connect(
  "mongodb+srv://aereisdin:ANgrc213@sprague-lace.soe13.mongodb.net/santa-sprague?retryWrites=true&w=majority"  ||
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
