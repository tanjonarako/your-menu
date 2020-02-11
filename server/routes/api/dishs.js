const express = require('express')
const Dish = require('../../models/dish')

const router = express.Router()

const formatDish = (req) => {
  const referenceName = req.body.name && req.body.name.split(' ').join('_').toLowerCase()
  return {
    ...(req.params.id && { id: req.params.id }),
    name: req.body.name,
    categoryId: req.body.categoryId,
    reference: referenceName + '_' + req.body.categoryId
  }
}

// Get all dishs
router.get('/', async (req, res) => {
  try {
    const dishs = await Dish.all()
    res.status(200).send(dishs)
  } catch (e) {
    console.log('error: ', e)
  }
})

// Get Dishs by category
router.get('/:category', async (req, res) => {
  try {
    const dishs = await Dish.allByCategory(req.params.category)
    res.status(200).send(dishs)
  } catch (e) {
    console.log('error: ', e)
  }
})


// Add Dish
router.post('/', async (req, res) => {
  try {
    const dish = formatDish(req)
    await Dish.addDish(dish)
    res.status(200).send()
  } catch (e) {
    console.log('error: ', e.message)
    if (e.code === '23505') res.status(403).send('Name already taken');
    res.status(400).send(e.message)
  }
})

// Delete Dish
router.delete('/:id', async (req, res) => {
  try {
    await Dish.deleteDish(req.params.id)
    res.status(201).send()
  } catch (e) {
    console.log('error: ', e.message)
    res.status(400).send(e.message)
  }
})

// Update Dish
router.patch('/:id', async (req, res) => {
  try {
    const dish = formatDish(req)
    await Dish.updateDish(dish)
    res.status(201).send()
  } catch (e) {
    console.log('error: ', e.message)
    if (e.code === '23505') res.status(403).send('Name already taken');
    res.status(400).send(e.message)
  }
})

module.exports = router
