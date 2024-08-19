import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div>
            <div className="footersection">
                <div className="footercontainer">
                    <div className="footerlogo">
                        <a href="/"><b>Beeonhive</b></a>
                    </div>
                    <p className="footer-description">
                        Beeonhive, arıcılık sektöründe teknoloji çözümleri sunan yenilikçi bir şirkettir.
                    </p>
                    <div className="footer-links">
                        <Link to="/products">Ürünler</Link>
                        <Link to="/about">Hakkımızda</Link>
                        <Link to="/contact">İletişim</Link>
                        <Link to="/login">Giriş Yap</Link>
                    </div>
                </div>
            </div>
            <div className="copyrightsection">
                <div className="copyrightcontainer">
                    <p className="copyright_text">© 2024. Design by 
                        <a href="https://www.linkedin.com/in/o%C4%9Fuzhan-ulu-23752a226/" target="_blank" rel="noopener noreferrer">
                            <b> Oğuzhan ULU</b>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
