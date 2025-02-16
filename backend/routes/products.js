const express = require('express');
const mongoose = require('mongoose');
const Product = require('../models/Products');  // Doğru model dosyasını import et
const router = express.Router();


// Ürün silme işlemi
router.delete('/:productId', async (req, res) => {
  try {
    const { productId } = req.params; // Silinecek ürünün ID'sini alıyoruz
    
    
    // Ürünü veritabanında bulup silme işlemi
    const product = await Product.findByIdAndDelete(productId);
    
    if (!product) {
      // Ürün bulunamazsa hata mesajı döndürüyoruz
      return res.status(404).json({ message: 'Ürün bulunamadı' });
      
    }
    
    // Silme başarılı ise başarı mesajı döndürüyoruz
    res.status(200).json({ message: 'Ürün başarıyla silindi' });
  } catch (error) {
    console.error(error);
    // Silme işlemi sırasında hata oluşursa hata mesajı döndürüyoruz
    res.status(500).json({ message: 'Ürün silinirken hata oluştu', error });
  }
});

// Yeni ürün oluşturma
router.post('/', async (req, res) => {
  try {
    // API'ye gelen body verisini al
    const { name, category, price, productdetails, photo } = req.body;
    console.log(name);
    console.log(name);
    console.log(category);
    console.log(price);
    console.log(productdetails);
    console.log(photo);
    // Eksik alanları kontrol et
    if (!name || !category || !price || !productdetails) {
      return res.status(400).json({ message: "Lütfen tüm zorunlu alanları doldurun." });
    }

    // Yeni ürün nesnesini oluştur (photo isteğe bağlı)
    const product = new Product({
      name,
      category,
      price,
      productdetails,
      photo: photo || "" // Fotoğraf isteğe bağlı, boş string atanabilir
    });

    // Ürünü kaydet
    await product.save();

    res.status(201).json({ message: "Ürün başarıyla eklendi", product });

  } catch (err) {
    console.error("Ürün eklerken hata oluştu:", err);
    res.status(500).json({ message: "Ürün eklenirken bir hata oluştu.", error: err.message });
  }
});

// Tüm ürünleri listeleme
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/count', async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();
    res.status(200).json({ totalProducts });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Belirli bir ürünü getirme (ID ile)
router.get('/:productId', async (req, res) => {
  const { productId } = req.params;

  // Gelen productId'yi konsola yazdırıyoruz
  console.log("Gelen productId:", productId);
  
  try {
    // Gelen productId'nin ObjectId olup olmadığını kontrol et
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: 'Geçersiz ürün ID\'si' });
    }
  
    // productId'yi ObjectId'ye dönüştürüp sorgu yapıyoruz
    const newId = new mongoose.Types.ObjectId(productId);
   
    const product = await Product.findOne({ _id: newId });
    
    // Bulunan ürünü konsola yazdırıyoruz
    console.log("Bulunan Ürün:", product);

    if (!product) {
      return res.status(404).json({ message: 'Ürün bulunamadı' });
    }

    res.status(200).json(product); // Ürün verisini döndürüyoruz
  } catch (err) {
    console.error('Ürün verileri alınırken hata oluştu:', err);
    res.status(500).json({ message: 'Ürün verileri alınırken hata oluştu.' });
  }
});

// Ürün güncelleme
router.put('/:productId', async (req, res) => {
  const { productId } = req.params;
  const { name, category, price, photo, productdetails } = req.body;

  try {
    // Gelen productId'nin ObjectId olup olmadığını kontrol et
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: 'Geçersiz ürün ID\'si' });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { name, category, price, photo, productdetails },
      { new: true }
    );
    
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Ürün bulunamadı' });
    }

    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: 'Ürün güncellenirken hata oluştu' });
  }
});

module.exports = router;
