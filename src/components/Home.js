import React from 'react';
import './Home.css';
import PageTitle from '../PageTitle';

function Home() {
  return (
    <>
    <PageTitle title='Ana Sayfa'/>
    <div className="video-container">
      <video autoPlay muted loop>
        <source src="/beehiveloop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay">
        <h1>Sitemize Hoş Geldiniz</h1>
        <p>Ürünümüz ve Hizmetlerimizi Keşfedin</p>
        <a href="/urunumuz">
          <button className="anasayfabuton">Ürünümüz</button>
        </a>
        
      </div>
    </div>
    </>
  );
}

export default Home;
