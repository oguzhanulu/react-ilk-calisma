import React, { useState } from 'react';
import './Admin.css';

function Admin() {
  const [activeTab, setActiveTab] = useState('admin');

  return (
    <>
      <div className="admin-panel">
        {/* Sidebar */}
        <aside className="sidebar">
          <h2>BeeonHive</h2>
          <nav>
            <ul>
              <li
                className={activeTab === 'admin' ? 'active' : ''}
                onClick={() => setActiveTab('admin')}
              >
                Admin Paneli
              </li>
              <li
                className={activeTab === 'products' ? 'active' : ''}
                onClick={() => setActiveTab('products')}
              >
                Ürünlere Göz At
              </li>
              <li
                className={activeTab === 'contact' ? 'active' : ''}
                onClick={() => setActiveTab('contact')}
              >
                İletişim
              </li>
              <li
                className={activeTab === 'logout' ? 'active' : ''}
                onClick={() => setActiveTab('logout')}
              >
                Çıkış Yap
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <div className="stats-container">
            <div className="stat-box">
              <h3>Toplam Ürün</h3>
              <p>0</p>
            </div>
            <div className="stat-box">
              <h3>Toplam İleti</h3>
              <p>0</p>
            </div>
            <div className="stat-box">
              <h3>Toplam Kullanıcı</h3>
              <p>0</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Admin;
