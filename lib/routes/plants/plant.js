const mongoose = require('mongoose')
const PlantSchema = new mongoose.Schema({
  species: String,
  description: String,
  height: Number,
  growTime: Number,
  season: String
})
module.exports = mongoose.model('Plant', PlantSchema)
