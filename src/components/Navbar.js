import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faInfo, faRightToBracket, faHouse } from '@fortawesome/free-solid-svg-icons';
import { faForumbee } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';

function Navbar() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-link">Beeonhive</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              <FontAwesomeIcon icon={faHouse} className='icon-small' /> Ana Sayfa
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/urunumuz"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              <FontAwesomeIcon icon={faForumbee} className='icon-small' /> Ürünümüz
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hakkimizda"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              <FontAwesomeIcon icon={faInfo} className="icon-small" /> Hakkımızda
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/iletisim"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              <FontAwesomeIcon icon={faPhone} className="icon-small" /> İletişim
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/giris-yap"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              <FontAwesomeIcon icon={faRightToBracket} className="icon-small" /> Giriş Yap
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
