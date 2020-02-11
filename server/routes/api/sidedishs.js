const express = require('express')
const SideDish = require('../../models/sidedish')

const router = express.Router()

// Get all sides
router.get('/', async (req, res) => {
  try {
    const sides = await SideDish.all()
    res.status(200).send(sides)
  } catch (e) {
    console.log('error: ', e)
  }
})

// Add side
router.post('/', async (req, res) => {
  try {
    await SideDish.add({name: req.body.name})
    res.status(200).send()
  } catch (e) {
    console.log('error: ', e.message)
    if (e.code === '23505') res.status(403).send('Name already taken');
    res.status(400).send(e.message)
  }
})

// Delete side
router.delete('/:id', async (req, res) => {
  try {
    await SideDish.delete(req.params.id)
    res.status(201).send()
  } catch (e) {
    console.log('error: ', e.message)
    res.status(400).send(e.message)
  }
})

module.exports = router