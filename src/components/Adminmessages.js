import React from 'react';
import './Adminmessages.css'; // AdminMessages için özel CSS
import Sidebar from './Sidebar'; // Sidebar bileşenini içe aktar
import PageTitle from '../PageTitle';

function AdminMessages() {
    return (
        <>
        <PageTitle title='Gelen Mesajlar'/>
        <div className="admin-panel">
            <Sidebar /> {/* Sidebar'ı buraya ekleyin */}
            {/* Main Content */}
            <main className="main-content">
                <h1>Gelen Mesajlar</h1>
                <div className="messages-container">
                    <p>Henüz mesaj yok.</p>
                </div>
            </main>
        </div>
        </>
    );
}

export default AdminMessages;
