import React from 'react';
import './About.css';

function About() {
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
            <div className="baslik">BİZİ TANIYIN</div>
            <div className="aboutcard">
                <div className="about-page">
                    <h1>Hakkımızda</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis hic officiis libero, natus exercitationem reprehenderit, rem repudiandae, similique blanditiis quod aliquid doloremque veritatis deleniti quidem delectus magnam atque laborum omnis?
                    Sunt reprehenderit, quasi voluptatum, aliquam nemo maxime accusantium aut cupiditate dolor inventore cumque? Exercitationem accusamus, quidem quaerat, expedita alias at deleniti praesentium nam asperiores ea ipsum nemo atque corrupti id?
                    Aperiam dignissimos repellat, possimus aliquid beatae voluptatum nobis labore explicabo. Quae similique tenetur eaque obcaecati dolore ex animi quo, voluptate sit reiciendis, quisquam pariatur accusantium, sapiente distinctio excepturi dolores fuga?</p>
                    <div className="about-content">
                        {}
                    </div>
                </div>
            </div>
            <div className="info-card">
                <div className="contact-card">
                    <div className="contact-info">
                        <div className="company-info">
                            <h2>Şirket Bilgileri</h2>
                            <p><strong>Şirket İsmi:</strong> Beehive Inc.</p>
                            <p><strong>Adres:</strong> 123 Bee Street, Honey City</p>
                        </div>
                        <div className="contact-details">
                            <h2>İletişim Bilgileri</h2>
                            <p><strong>Telefon:</strong> +90 123 456 7890</p>
                            <p><strong>E-posta:</strong> info@beehive.com</p>
                        </div>
                    </div>
                    <div className="map-container">
                        <iframe
                            title="Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3184.684459339539!2d35.35793977645467!3d37.041169254078106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15288f30dd5db9b1%3A0x83ea34b767dd3c8e!2zU09MVkFZVEVDSCBNw5xIRU5ExLBTTMSwSw!5e0!3m2!1str!2str!4v1723994897367!5m2!1str!2str"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
