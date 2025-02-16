import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditProductModal.css'; // Modal için stil dosyasını ekle

const EditProductModal = ({ productId, isOpen, onClose, onSave }) => {
  const [productData, setProductData] = useState({
    name: '',
    category: '',
    productdetails: '',
    price: '',
  });

  const [isLoading, setIsLoading] = useState(false); // Yükleniyor durumu
  const [errorMessage, setErrorMessage] = useState(''); // Hata mesajı

  // Modal açıldığında, seçili ürünü al
  useEffect(() => {
    console.log('Modal Açıldı. Product ID:', productId); // Kontrol için ekle
    if (isOpen && productId) {
      setIsLoading(true); // Yükleniyor durumu aktif
      axios
        .get(`http://localhost:3001/api/products/${productId}`)
        .then((response) => {
          console.log('API Yanıtı:', response);  // API yanıtını logla
          setProductData(response.data);
          setIsLoading(false); // Yükleme tamamlandı
        })
        .catch((error) => {
          setIsLoading(false); // Yükleme tamamlandı
          setErrorMessage('Ürün verileri alınırken hata oluştu.'); // Hata mesajı
          console.error('Ürün verileri alınırken hata oluştu:', error);
           // Detaylı hata mesajını göster
          if (error.response) {
          console.log('Hata Yanıtı:', error.response.data);  // Backend'den gelen hata mesajı
          } else if (error.request) {
            console.log('İstek Hatası:', error.request);  // API'ye istek yapılırken bir sorun oluştuysa
          } else {
            console.log('Genel Hata:', error.message);  // Diğer hatalar
          }
        });
    }
  }, [isOpen, productId]);

  // Değişiklikler kaydedildiğinde
  const handleSave = () => {
    setIsLoading(true); // Yükleniyor durumu aktif
    axios
      .put(`http://localhost:3001/api/products/${productId}`, productData)
      .then((response) => {
        setIsLoading(false); // Yükleniyor durumu tamamlandı
        onSave(response.data); // Güncellenen veriyi üst bileşene ilet
        onClose(); // Modalı kapat
      })
      .catch((error) => {
        setIsLoading(false); // Yükleniyor durumu tamamlandı
        setErrorMessage('Ürün güncellenirken hata oluştu.'); // Hata mesajı
        console.error('Ürün güncellenirken hata oluştu:', error);
      });
  };

  // Modalın kapanması
  const handleClose = () => {
    setErrorMessage(''); // Hata mesajını sıfırla
    onClose();
  };

  // Veri alanlarını güncelleme
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Ürünü Düzenle</h2>
          {isLoading && <p>Yükleniyor...</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <label>
            Ürün Adı:
            <input
              type="text"
              name="name"
              value={productData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Kategori:
            <input
              type="text"
              name="category"
              value={productData.category}
              onChange={handleChange}
            />
          </label>
          <label>
            Açıklama:
            <textarea
              name="productdetails"
              value={productData.productdetails}
              onChange={handleChange}
            />
          </label>
          <label>
            Fiyat:
            <input
              type="number"
              name="price"
              value={productData.price}
              onChange={handleChange}
            />
          </label>
          <button onClick={handleSave} disabled={isLoading}>
            Kaydet
          </button>
          <button onClick={handleClose}>Kapat</button>
        </div>
      </div>
    )
  );
};

export default EditProductModal;
