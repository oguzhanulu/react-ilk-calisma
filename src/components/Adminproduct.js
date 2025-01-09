import React, { useState } from 'react';
import './Adminproduct.css';
import PageTitle from '../PageTitle';
import Sidebar from './Sidebar';

const AdminProduct = ({ products = [], onEdit, onDelete }) => {  // Default olarak boş bir array veriyoruz
  const [searchTerm, setSearchTerm] = useState('');

  // Ürünleri arama
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
        <PageTitle title='Ürünler'/>
     <Sidebar /> {/* Sidebar'ı buraya ekleyin */}
    <div className="admin-product-container">
    
      {/* Arama Çubuğu */}
      <input
        type="text"
        className="search-bar"
        placeholder="Ürün ara..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Ürün Tablosu */}
      <table className="admin-product-table">
        <thead>
          <tr>
            <th>Ürün Adı</th>
            <th>Eklenme Tarihi</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{new Date(product.dateAdded).toLocaleDateString()}</td>
                <td>
                  <button onClick={() => onEdit(product.id)} className="edit-button">
                    Düzenle
                  </button>
                  <button onClick={() => onDelete(product.id)} className="delete-button">
                    Sil
                  </button>
                </td>
              </tr>
        
            ))
          ) : (
            <tr>
              <td colSpan="3">Hiç ürün bulunamadı.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </>
  );

};

export default AdminProduct;
