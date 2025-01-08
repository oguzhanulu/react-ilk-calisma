import React from 'react';
import './Admin.css';
import Sidebar from './Sidebar'; // Sidebar importu
import PageTitle from '../PageTitle';

function Admin() {
    return (
        <>
        <PageTitle title='Dashboard'/>
        <div className="admin-panel">
            <Sidebar />  {/* Sidebar burada kullanılıyor */}
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
