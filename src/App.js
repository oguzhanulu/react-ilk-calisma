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

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar /> {}
              <PageTitle title="Ana Sayfa" />
              <Home />
              <Footer/>
            </>
          }
        />
        <Route
          path="/urunumuz"
          element={
            <>
              <Navbar /> {}
              <Product />
              <Footer/>
            </>
          }
        />
        <Route
          path="/hakkimizda"
          element={
            <>
              <Navbar /> {}
              <About />
              <Footer/>
            </>
          }
        />
        <Route
          path="/iletisim"
          element={
            <>
              <Navbar /> {}
              <Contact />
              <Footer/>
            </>
          }
        />
        <Route
          path="/giris-yap"
          element={
            <>
              <PageTitle title="Giriş Yap" />
              <Login /> {}
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
