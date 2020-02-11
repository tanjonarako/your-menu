const express = require('express')
const Category = require('../../models/category')

const router = express.Router()

// Get all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.all()
    res.status(200).send(categories)
  } catch (e) {
    console.log('error: ', e)
  }
})

module.exports = router
