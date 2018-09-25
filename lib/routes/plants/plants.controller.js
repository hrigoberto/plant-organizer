const express = require('express')
const plantsController = express.Router()
const Plant = require('./plant')

plantsController.post('/', async ( req, res, next ) => {
  const plant = await Plant.create(req.body)
  res.status(200).send(plant)
})

plantsController.put('/:id', async ( req, res, next ) => {
  const plant = await Plant.findByIdAndUpdate(req.params.id, { $set: req.body}, { $upsert: true, new: true})
  res.status(200).send(plant)
})

plantsController.get('/', async ( req, res, next ) => {
  const plants = await Plant.find()
  res.status(200).send(plants)
})

plantsController.get('/:id', async ( req, res, next ) => {
  const plant = await Plant.findByid(req.params.id)
  res.status(200).send(plant)
})

plantsController.delete('/:id', async (req, res, next ) => {
  const plant = await Plant.deleteOne({_id: req.params.id})
  res.status(200).send(plant)
})

module.exports = plantsController
