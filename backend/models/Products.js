const mongoose = require('mongoose');

// Ürün için Schema tanımlama
const productSchema = new mongoose.Schema({
  
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  photo: { type: String, required: false },
  productdetails: { type: String, required: true },
});

// Product modelini oluşturma ve dışa aktarma
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
