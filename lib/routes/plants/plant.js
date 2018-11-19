const mongoose = require('mongoose')
const PlantSchema = new mongoose.Schema({
  plant: Object
})
module.exports = mongoose.model('Plant', PlantSchema)
