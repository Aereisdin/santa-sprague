const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ownedPlantSchema = new Schema({
      user: [
        {
          type: Schema.Types.ObjectId,
          ref: "User"
        }
      ],
      genus: { type: String, required: true },
      species: { type: String, required: true },
      variety: String,
      common_name: { type: String },
      watering: { type: String, Enum: ['Low', 'Medium', 'High'] },
      temperature: { type: String, Enum: ['Low', 'Medium', 'High'] },
      humidity: { type: String, Enum: ['Low', 'Medium', 'High'] },
      light: { type: String, Enum: ['Low', 'Medium', 'High'] },
      description: { type: String },
      photo: { type: String }
    });
    
    const OwnedPlant = mongoose.model("OwnedPlant", ownedPlantSchema);
    
    module.exports = OwnedPlant;


