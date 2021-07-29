const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, match: [/.+@.+\..+/, "Please enter a valid e-mail address"] },
  photo: { type: String, required: false },
  color: { type: String, required: false },
  animal: { type: String, required: false },
  sportTeam: { type: String, required: false },
  waistSize: { type: String, required: false },
  shirtSize: { type: String, required: false },
  hobbies: { type: String, required: false },
  note: { type: String, required: false },
  password: { type: String, required: true, min: [8, "Too few characters"], max: [36, "Calm down, we don't need that many"] }
});

const User = mongoose.model("User", userSchema);

module.exports = User;