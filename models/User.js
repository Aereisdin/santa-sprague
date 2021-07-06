const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, match: [/.+@.+\..+/, "Please enter a valid e-mail address"] },
  password: { type: String, required: true, min: [8, "Too few characters"], max: [36, "Calm down, we don't need that many"] }
});

const User = mongoose.model("User", userSchema);

module.exports = User;

