import React, { useState, useEffect } from 'react';
import './Cart.css';
import Navbar from './Navbar';

function Cart() {
  const [sepet, setSepet] = useState(() => {
    const savedSepet = localStorage.getItem('sepet');
    return savedSepet ? JSON.parse(savedSepet) : [];
  });

  // Sepet değiştiğinde localStorage'ı güncelle
  useEffect(() => {
    localStorage.setItem('sepet', JSON.stringify(sepet));
  }, [sepet]);

  // Sepetten ürün adetini artırma fonksiyonu
  const adetArtir = (urunId) => {
    setSepet(
      sepet.map((item) =>
        item._id === urunId ? { ...item, adet: item.adet + 1 } : item
      )
    );
  };

  // Sepetten ürün çıkarma fonksiyonu
  const adetAzalt = (urunId) => {
    setSepet(
      sepet
        .map((item) =>
          item._id === urunId ? { ...item, adet: item.adet - 1 } : item
        )
        .filter((item) => item.adet > 0) // Adet 0 veya daha az ise ürünü sepetten kaldır
    );
  };

  return (
    <>
    <Navbar/>
    <div className="cart">
      <h2>Sepetiniz</h2>
      {sepet.length === 0 ? (
        <p>Sepetinizde ürün bulunmamaktadır.</p>
      ) : (
        <ul>
          {sepet.map((item) => (
            <li key={item._id} className="cart-item">
              <img src={item.photo} alt={item.name} />
              <div className="product-info">
                <h3>{item.name}</h3>
                <p>{item.category}</p>
                <p>{item.price} TL</p>
                <div className="quantity-controls">
                  <button className="decrease" onClick={() => adetAzalt(item._id)}>-</button>
                  <span>{item.adet}</span>
                  <button className="increase" onClick={() => adetArtir(item._id)}>+</button>
                </div>
              </div>
              <button onClick={() => adetAzalt(item._id)}>Sepetten Çıkar</button>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-total">
        <p>
          Toplam:{" "}
          {sepet.reduce((acc, item) => acc + item.adet * item.price, 0)} TL
        </p>
        <button>Ödeme Yap</button>
      </div>
    </div>
    </>
  );
}

export default Cart;
