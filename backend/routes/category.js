const express = require('express');
const Category = require('../models/Category');
const router = express.Router();

// Yeni kategori oluşturma
router.post('/', async (req, res) => {
  const { name } = req.body;
  try {
    // Aynı isimde bir kategori var mı diye kontrol edelim
    const existingCategory = await Category.find({ name });
    if (existingCategory) {
      return res.status(400).json({ message: 'Bu kategori zaten mevcut.' });
    }

    const category = new Category({ name });
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Tüm kategorileri listeleme
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
