import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div>
            <div className="video-container">
                <video autoPlay muted loop>
                    <source src="/beehiveloop.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="video-overlay">
                    <h1>Welcome to Our Website</h1>
                    <p>Discover our products and services</p>
                    <a href="/product">
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
                        <form>
                            <label>
                                İsim:
                                <input type="text" name="name" required />
                            </label>
                            <label>
                                E-posta:
                                <input type="email" name="email" required />
                            </label>
                            <label>
                                Konu:
                                <input type="text" name="subject" required />
                            </label>
                            <label>
                                Mesaj:
                                <textarea name="message" rows="5" required></textarea>
                            </label>
                            <button type="submit">Mesajı Gönder</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
