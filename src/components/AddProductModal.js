import React, { useState } from 'react';
import axios from 'axios';
import './AddProductModal.css';

const AddProductModal = ({ isOpen, onClose, onSave }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [productdetails, setProductdetails] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Formda tüm verilerin dolduğundan emin olun
    if (!name || !category || !price || !productdetails) {
      setError('Tüm alanları doldurduğunuzdan emin olun.');
      return;
    }

    const newProduct = new FormData();
    newProduct.append('name', name);
    newProduct.append('category', category);
    newProduct.append('price', price);
    newProduct.append('productdetails', productdetails);
    
    // Fotoğraf varsa ekle
    if (image) {
      newProduct.append('photo', image);
    }
    console.log("name");
    console.log(name);
    console.log(category);
    console.log(price);
    console.log(productdetails);
    

    axios
      .post('http://localhost:3001/api/products', newProduct)
      .then((response) => {
        onSave(response.data); // Yeni ürünü kaydediyoruz
        onClose();  // Modal'ı kapatıyoruz
      })
      .catch((error) => {
        if (error.response) {
          console.error('Sunucu Hatası:', error.response.data);
          setError(`Hata: ${error.response.data.message || 'Ürün eklenirken bir hata oluştu.'}`);
        } else if (error.request) {
          console.error('İstek Hatası:', error.request);
          setError('Sunucuya bağlanılamadı. Lütfen internet bağlantınızı kontrol edin.');
        } else {
          console.error('Hata:', error.message);
          setError('Bir hata oluştu. Lütfen tekrar deneyin.');
        }
      });
  };

  if (!isOpen) return null; // Modal açık değilse, hiçbir şey gösterme

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Yeni Ürün Ekle</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Ürün Adı:</label>
            <input
              type="text"
              placeholder="Ürün Adı"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Kategori:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Kategori Seçin</option>
              <option value="Ana Modül">Ana Modül</option>
              <option value="Ek Modül">Ek Modül</option>
            </select>
          </div>

          <div className="form-group">
            <label>Fiyat (TL):</label>
            <input
              type="number"
              placeholder="Ürün Fiyatı"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Ürün Detayları:</label>
            <textarea
              placeholder="Ürün Açıklaması"
              value={productdetails}
              onChange={(e) => setProductdetails(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Ürün Fotoğrafı (Opsiyonel):</label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              accept="image/*"
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <div className="modal-actions">
            <button type="submit">Ürün Ekle</button>
            <button type="button" onClick={onClose}>Kapat</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
