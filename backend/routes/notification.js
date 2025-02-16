const express = require('express');
const mongoose = require('mongoose');
const Notification = require('../models/Notification');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    console.log(req.body);
    // Veritabanına yeni notification kaydetme
    const newNotification = new Notification({
      name,
      email,
      subject,
      message,
    });

    await newNotification.save();  // Veritabanına kaydet

    res.status(200).json({ message: 'Mesajınız başarıyla kaydedildi!', data: newNotification });
  } catch (error) {
    console.error('Sunucu Hatası:', error);
    res.status(500).json({ message: 'Veri kaydedilirken bir hata oluştu.' });
  }
});

// Toplam mesaj sayısını getir
router.get('/count', async (req, res) => {
  try {
    const totalMessages = await Notification.countDocuments();
    res.status(200).json({ totalMessages });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Tüm bildirimleri listeleme
router.get('/', async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.status(200).json(notifications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;