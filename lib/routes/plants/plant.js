const mongoose = require('mongoose')
const PlantSchema = new mongoose.Schema({
  imageUrl: String,
  commonName: String,
  species: String,
  variety: String,
  height: String,
  plantingDepth: String,
  bloomTime: String,
  plantSpacing: String,
  color: String,
  number: String,
  daysToBloom: String,
  sunReq: String,
  germinationTemp: String,
  seedingDate: Date,
  notes: String,
})
module.exports = mongoose.model('Plant', PlantSchema)
