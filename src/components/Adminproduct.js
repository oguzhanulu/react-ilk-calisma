import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Adminproduct.css';
import PageTitle from '../PageTitle';
import Sidebar from './Sidebar';
import EditProductModal from './EditProductModal';
import AddProductModal from './AddProductModal'; // Yeni Modal'ı ekliyoruz

const AdminProduct = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false); // Yeni ürün ekleme modal'ı için state
  const [showConfirmation, setShowConfirmation] = useState(false); // Silme onay state'i

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Ürünler alınırken hata oluştu:', error);
      });
  }, []);

  const filteredProducts = products.filter(product =>
    product.name?.toLowerCase().includes(searchTerm?.toLowerCase() || "")
  );

  const handleEdit = (productId) => {
    setSelectedProductId(productId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsAddProductModalOpen(false); // Yeni ürün modal'ını kapatma
  };

  const handleSaveProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product._id === updatedProduct._id ? updatedProduct : product
      )
    );
  };

  // Yeni ürün ekleme butonuna tıklanması durumunda açılacak modal
  const handleAddProduct = () => {
    setIsAddProductModalOpen(true);
  };

  // Silme işlemi
  const handleDelete = (productId) => {
    axios
      .delete(`http://localhost:3001/api/products/${productId}`)
      .then((response) => {
        console.log("Ürün başarıyla silindi", response.data);
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product._id !== productId)
        ); // Ürünü UI'dan sil
        setShowConfirmation(false); // Pop-up'ı kapat
      })
      .catch((error) => {
        console.error("Ürün silinirken hata oluştu:", error.response || error.message || error);
      });
  };

  // Onay pop-up'ını açma
  const handleFirstConfirmation = (productId) => {
    setSelectedProductId(productId);
    setShowConfirmation(true);
  };

  return (
    <>
      <PageTitle title="Ürünler" />
      <div className="admin-container">
        <Sidebar />
        <div className="admin-product-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Ürün ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <table className="admin-product-table">
            <thead>
              <tr>
                <th>Ürün Adı</th>
                <th>Ürün Kategorisi</th>
                <th>Ürün Açıklaması</th>
                <th>Ürün Fiyatı</th>
                <th>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <tr key={product._id}>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.productdetails}</td>
                    <td>{product.price.toLocaleString()} TL</td>
                    <td>
                      <button onClick={() => handleEdit(product._id)} className="edit-button">
                        Düzenle
                      </button>
                      <button onClick={() => handleFirstConfirmation(product._id)} className="delete-button">
                        Sil
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">Hiç ürün bulunamadı.</td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Yeni Ürün Ekle Butonu */}
          <button onClick={handleAddProduct} className="add-product-button">Yeni Ürün Ekle</button>
        </div>
      </div>

      {/* EditProductModal Bileşeni */}
      <EditProductModal
        productId={selectedProductId}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveProduct}
      />

      {/* AddProductModal Bileşeni */}
      <AddProductModal 
        isOpen={isAddProductModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveProduct}
      />

      {/* Silme Onay Pop-up'ı */}
      {showConfirmation && (
        <div className="confirmation-popup">
          <p>Bu ürünü siliyorsunuz, emin misiniz?</p>
          <button onClick={() => handleDelete(selectedProductId)}>Evet</button>
          <button onClick={() => setShowConfirmation(false)}>Hayır</button>
        </div>
      )}
    </>
  );
};

export default AdminProduct;
