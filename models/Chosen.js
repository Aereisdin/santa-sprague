const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chosenSchema = new Schema({
      user: [
        {
          type: Schema.Types.ObjectId,
          ref: "User"
        }
      ],
      chosen_person: { type: String, required: true },
      likes: { type: String, required: true },
      description: { type: String },
      photo: { type: String }
    });
    
    const Chosen = mongoose.model("chosen", chosenSchema);
    
    module.exports = Chosen;


