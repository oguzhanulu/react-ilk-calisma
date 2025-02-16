import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Product.css';
import PageTitle from '../PageTitle';

function Product() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Sepet state'i ve localStorage entegrasyonu
  const [sepet, setSepet] = useState(() => {
    const savedSepet = localStorage.getItem('sepet');
    return savedSepet ? JSON.parse(savedSepet) : [];
  });

  // Sepet değiştiğinde localStorage'ı güncelle
  useEffect(() => {
    localStorage.setItem('sepet', JSON.stringify(sepet));
  }, [sepet]);

  // Ürünleri API'den çekme
  useEffect(() => {
    axios.get('http://localhost:3001/api/products')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Ürünler alınırken hata oluştu:', error);
        setError('Ürünler alınırken bir hata oluştu. Lütfen tekrar deneyin.');
        setLoading(false);
      });
  }, []);

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

  // Filtreleme fonksiyonu
  const filterByCategory = (category) => {
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  // Sepete ürün ekleme fonksiyonu
  const sepeteEkle = (urun) => {
    const urunSepette = sepet.find((item) => item._id === urun._id);
    if (urunSepette) {
      setSepet(
        sepet.map((item) =>
          item._id === urun._id ? { ...item, adet: item.adet + 1 } : item
        )
      );
    } else {
      setSepet([...sepet, { ...urun, adet: 1 }]);
    }
  };

  // Sepetten ürün adetini azaltma fonksiyonu
  const adetAzalt = (urunId) => {
    setSepet(
      sepet
        .map((item) =>
          item._id === urunId ? { ...item, adet: item.adet - 1 } : item
        )
        .filter((item) => item.adet > 0) // Adet 0 veya daha az ise ürünü sepetten kaldır
    );
  };

  // Sepetten ürün adetini artırma fonksiyonu
  const adetArtir = (urunId) => {
    setSepet(
      sepet.map((item) =>
        item._id === urunId ? { ...item, adet: item.adet + 1 } : item
      )
    );
  };

  // Sepeti görüntüleme fonksiyonu
  const sepetiGoruntule = () => {
    alert(JSON.stringify(sepet, null, 2)); // Sepeti basit bir alert ile göster
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
              BeeonHive ile birlikte kovanlarınızı web uygulamamız üzerinden kolayca takip edebilirsiniz. 2'si ana modül olmak üzere toplam
              6 modül ile birlikte kovanınızın sıcaklık ve nemini, karbondioksit ve sülfür oranını ve hatta GPS modülü ile konumunu öğrenebilirsiniz.
              Müdahale edilmesi gereken durumlarda ise gerekli ilaçlamayı da yapabilirsiniz.
            </p>
          </div>
        </div>
      </div>

      {/* Filtreleme butonları */}
      <div className="filter-buttons">
        <button onClick={() => filterByCategory('Ana Modül')}>Ana Modül</button>
        <button onClick={() => filterByCategory('Ek Modül')}>Ek Modül</button>
        <button onClick={() => filterByCategory('all')}>Tümü</button>
      </div>

      {/* Yükleme durumu */}
      <div className="product-container">
        {loading ? (
          <div className="loading-spinner">Yükleniyor...</div>
        ) : error ? (
          <p>{error}</p>
        ) : (
          filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className="product-box" key={product._id}>
                <img src={`http://localhost:3001/uploads/${product.photo}`} alt={product.name} className="product-image" />
                <h3>{product.name}</h3>
                <p>{product.category}</p>
                <p>{product.price} TL</p>
                <button onClick={() => openModal(product)}>Detayları Göster</button>
                <button className="buy" onClick={() => sepeteEkle(product)}>Sepete Ekle</button>
              </div>
            ))
          ) : (
            <p>Ürün bulunamadı.</p>
          )
        )}
      </div>

      {/* Modal İçeriği */}
      {isModalOpen && selectedProduct && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{selectedProduct.name}</h2>
            <img src={selectedProduct.photo} alt={selectedProduct.name} className="modal-image" />
            <p>{selectedProduct.productdetails}</p>
            <p>Fiyat: {selectedProduct.price} TL</p>
            <button onClick={closeModal}>Kapat</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
