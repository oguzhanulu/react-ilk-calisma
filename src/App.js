import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import PageTitle from './PageTitle';
import Product from './components/Product';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Admin from './components/Admin'
import AdminMessages from './components/Adminmessages';
import Sidebar from './components/Sidebar';
import AdminProduct from './components/Adminproduct';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar /> 
              <Home />
              <Footer/>
            </>
          }
        />
        <Route
          path="/urunumuz"
          element={
            <>
              <Navbar /> 
              <Product />
              <Footer/>
            </>
          }
        />
        <Route
          path="/hakkimizda"
          element={
            <>
              <Navbar /> 
              <About />
              <Footer/>
            </>
          }
        />
        <Route
          path="/iletisim"
          element={
            <>
              <Navbar /> 
              <Contact />
              <Footer/>
            </>
          }
        />
        <Route
          path="/giris-yap"
          element={
            <>
              <Login /> 
            </>
          }
        />
        <Route
          path="/admin"
          element={
            <>
              <Admin /> 
            </>
          }
        />
        <Route
          path="/admin-iletisim"
          element={
            <>
              <AdminMessages /> 
            </>
          }
        />
        <Route
          path="/admin-urunler"
          element={
            <>
              <AdminProduct /> 
            </>
          }
        />
        <Route
          path="/sepet"
          element={
            <>
              
              <Cart />
              <Footer/>
               
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
