const express = require('express')
const plantsController = express.Router()
const Plant = require('./plant')
const header = {
  "Access-Control-Allow-Credentials": true,
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
}

sendError = (res, status, message) => error => {
  res.status(status || error.status).json({
    type: 'error',
    message: message || error.message,
    error
  })
}

plantsController.post('/', async ( req, res, next ) => {
  try {
    const plant = await Plant.create(req.body)
    res.status(200).send(plant)
  } catch (err) {
    sendError(res)(err)
  }

})

plantsController.put('/:id', async ( req, res, next ) => {
  try {
    const plant = await Plant.findByIdAndUpdate(req.params.id, { $set: req.body}, { $upsert: true, new: true})
    res.status(200).send(plant)
  } catch (err){
    sendError(res)(err)
  }
})

plantsController.get('/', async ( req, res, next ) => {
  try {
    const plants = await Plant.find()
    res.status(200).send(plants)
  } catch (err) {
    sendError(res)(err)
  }
})

plantsController.get('/:id', async ( req, res, next ) => {
  res.set(header);
  try {
    const plant = await Plant.findByid(req.params.id)
    res.status(200).send(plant)
  } catch (err) {
    sendError(res)(err)
  }
})

plantsController.delete('/:id', async (req, res, next ) => {
  try {
    const plant = await Plant.deleteOne({_id: req.params.id})
    res.status(200).send(plant)
  } catch (err) {
    sendError(res)(err)
  }
})

module.exports = plantsController
