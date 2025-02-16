import React, { useEffect, useState } from 'react';
import './Adminmessages.css'; // AdminMessages için özel CSS
import Sidebar from './Sidebar'; // Sidebar bileşenini içe aktar
import PageTitle from '../PageTitle';

function AdminMessages() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
          try {
            const response = await fetch('http://localhost:3001/api/notifications');
            const data = await response.json();
            
            // Her iki anahtar kümesi ile çalışabilmek için Türkçe ve İngilizce anahtarları eşitle
            const normalizedData = data.map(msg => ({
            _id: msg._id,
            konu: msg.subject || msg.konu,   // `konu` veya `subject`'i kullan
            mesaj: msg.message || msg.mesaj,  // `mesaj` veya `message`'i kullan
            mail: msg.email || msg.mail,       // `mail` veya `email`'i kullan
            isim: msg.name || msg.isim          // `isim` veya `name`'i kullan
          }));
          
          console.log("Normalleştirilmiş veriler:", normalizedData);
          
          setMessages(normalizedData);
          } catch (error) {
            console.error("Mesajları çekerken hata oluştu:", error);
          }
        };
    
        fetchMessages();
    }, []);

    return (
        <>
            <PageTitle title='Gelen Mesajlar' />
            <div className="admin-panel">
                <Sidebar /> {/* Sidebar'ı buraya ekleyin */}
                {/* Main Content */}
                <main className="main-content">
                    <h1>Gelen Mesajlar</h1>
                    <div className="messages-container">
                        {messages.length === 0 ? (
                            <p>Henüz mesaj yok.</p>
                        ) : (
                            <table className="messages-table">
                                <thead>
                                    <tr>
                                        <th>İsim</th>
                                        <th>E-posta</th>
                                        <th>Konu</th>
                                        <th>Mesaj</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {messages.map((msg, index) => (
                                        <tr key={index}>
                                            <td>{msg.isim}</td>
                                            <td>{msg.mail}</td>
                                            <td>{msg.konu}</td>
                                            <td>{msg.mesaj}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </main>
            </div>
        </>
    );
}

export default AdminMessages;
