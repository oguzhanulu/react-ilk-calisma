import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';
import Sidebar from './Sidebar'; // Sidebar importu
import PageTitle from '../PageTitle';

function Admin() {
  const navigate = useNavigate();
  const [adminName, setAdminName] = useState('');
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalMessages, setTotalMessages] = useState(0);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const productResponse = await fetch('http://localhost:3001/api/products/count');
        const messageResponse = await fetch('http://localhost:3001/api/notifications/count');

        const productData = await productResponse.json();
        const messageData = await messageResponse.json();

        setTotalProducts(productData.totalProducts);
        setTotalMessages(messageData.totalMessages);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <>
      <PageTitle title="Dashboard" />
      <div className="admin-panel">
        <Sidebar />
        <main className="main-content">
          <div className="welcome-message">
            <h1>Hoşgeldiniz, {adminName}!</h1>
          </div>
          <div className="stats-container">
            <div className="stat-box">
              <h3>Toplam Ürün</h3>
              <p>{totalProducts}</p>
            </div>
            <div className="stat-box">
              <h3>Toplam İleti</h3>
              <p>{totalMessages}</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Admin;
