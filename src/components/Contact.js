import React, { useState } from 'react';
import './Contact.css';
import PageTitle from '../PageTitle';
import axios from 'axios';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Formda tüm alanların doldurulduğundan emin ol
    if (!name || !email || !subject || !message) {
      setError('Tüm alanları doldurduğunuzdan emin olun.');
      return;
    }

    const formData = {
      name,
      email,
      subject,
      message,
    };

    axios.post('http://localhost:3001/api/notifications', formData)
  .then((response) => {
    setSuccess('Mesajınız başarıyla gönderildi!');
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  })
  .catch((error) => {
    console.error('Hata Detayı:', error.response ? error.response.data : error.message);
    setError(error.response?.data?.error || 'Mesaj gönderilirken bir hata oluştu.');
  });

  };

  return (
    <>
      <PageTitle title="İletişim" />
      <div>
        <div className="video-container">
          <video autoPlay muted loop>
            <source src="/beehiveloop.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay">
            <h1>Welcome to Our Website</h1>
            <p>Discover our products and services</p>
            <a href="/urunumuz">
              <button className="anasayfabuton">Ürünümüz</button>
            </a>
          </div>
        </div>

        <div className="contact-page">
          <div className="contact-info-container">
            <div className="contact-info-left">
              <h2>Şirket Bilgileri</h2>
              <p><strong>Şirket İsmi:</strong> Beehive Inc.</p>
              <p><strong>Adres:</strong> 123 Bee Street, Honey City</p>
              <p><strong>Telefon:</strong> +90 123 456 7890</p>
            </div>
            <div className="contact-info-right">
              <h2>İletişim Formu</h2>
              <form onSubmit={handleSubmit}>
                <label>
                  İsim:
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </label>
                <label>
                  E-posta:
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Konu:
                  <input
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Mesaj:
                  <textarea
                    name="message"
                    rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </label>
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
                <button type="submit">Mesajı Gönder</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
