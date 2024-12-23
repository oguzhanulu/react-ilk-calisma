import React, { useState } from 'react';
import './Product.css';
import PageTitle from '../PageTitle';

function Product() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Ürün bilgilerini bir dizi olarak saklayalım
  const products = [
    { id: 1, name: "Ürün 1", imageUrl: "/anamodulson.png" },
    { id: 2, name: "Ürün 2", imageUrl: "/anamodulson.png" },
    { id: 3, name: "Ürün 3", imageUrl: "/anamodulson.png" },
    { id: 4, name: "Ürün 4", imageUrl: "/anamodulson.png" },
    { id: 5, name: "Ürün 5", imageUrl: "/anamodulson.png" },
    { id: 6, name: "Ürün 6", imageUrl: "/anamodulson.png" },
    { id: 7, name: "Ürün 7", imageUrl: "/anamodulson.png" },
    { id: 8, name: "Ürün 8", imageUrl: "/anamodulson.png" },
  ];

  // Modal'ı açma fonksiyonu
  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  // Modal'ı kapama fonksiyonu
  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <PageTitle title="Ürünümüz" />
      <div>
        <div className="baslik">Ürünümüz Hakkında</div>
        <div className="aboutcard">
          <div className="about-page">
            <h1 id="about-title">BeeonHive</h1>
            <p>
              BeeonHive ile birlikte kovanlarınızı web uygulamamız üzerinden kolayca takip edebilirsiniz. 2 si ana modül olmak üzere toplam
              6 modül ile birlikte kovanınızın sıcaklık ve nemini, karbondioksit ve sülfür oranını ve hatta gps modülü ile konumunu öğrenebilirsiniz.
              Müdahele edilmesi gereken durumlarda ise gerekli ilaçlamayı da yapabilirsiniz.
            </p>
          </div>
        </div>
      </div>

      <div className="product-container">
        {products.map((product) => (
          <div className="product-box" key={product.id}>
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <button onClick={() => openModal(product)}>Detayları Göster</button>
          </div>
        ))}
      </div>

      {isModalOpen && (
  <div className="modal-overlay" onClick={closeModal}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="modal-close" onClick={closeModal}>×</button> {/* Kapatma butonu */}
      <h2>{selectedProduct.name}</h2>
      <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="product-image" />
      <p>Ana Modül Bu ana modül sayesinde kovanlarınızdaki anlık sıcaklık ve nem değerlerini takip edebilip anormal bir sıcaklık-nem değişikliğinde bildirim alacaksınız.</p>
      <button className="close" onClick={closeModal}>Kapat</button>
      <button className="buy">Satın Al</button>
    </div>
  </div>
)}
    </>
  );
}

export default Product;
