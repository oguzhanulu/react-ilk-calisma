import React from 'react';
import { NavLink } from 'react-router-dom'; // NavLink import ettik
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>BeeonHive</h2>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/admin"
              className={({ isActive }) => isActive ? 'sidebar__link active' : 'sidebar__link'}
            >
              Admin Paneli
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin-urunler"
              className={({ isActive }) => isActive ? 'sidebar__link active' : 'sidebar__link'}
            >
              Ürünlere Göz At
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin-iletisim"
              className={({ isActive }) => isActive ? 'sidebar__link active' : 'sidebar__link'}
            >
              Mesajları Görüntüle
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? 'sidebar__link active' : 'sidebar__link'}
            >
              Çıkış Yap
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
