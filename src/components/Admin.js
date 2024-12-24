import React from 'react';
import './Admin.css';



function Admin () {
        return (
            <>
                <div className="admin-panel">
                    {/* Sidebar */}
                    <aside className="sidebar">
                    <h2>BeeonHive</h2>
                    <nav>
                    <ul>
                        <li>Admin Paneli</li>
                        <li>Ürünlere Göz At</li>
                        <li>İletişim</li>
                        <li>Çıkış Yap</li>
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
        )

};
export default Admin;