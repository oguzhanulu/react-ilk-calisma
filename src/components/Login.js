import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'; 
import './Login.css';
import PageTitle from '../PageTitle';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Formun sayfayı yenilemesini engelle
    console.log('Email:', email); // Debugging: E-posta doğru mu?
    console.log('Password:', password); // Debugging: Şifre doğru mu?

    try {
      const response = await axios.post('http://localhost:3001/api/users/login', { email, password });
      console.log('Response:', response.data); // Backend yanıtını kontrol et

      const { token, name } = response.data;
      localStorage.setItem('token', token); // Token'ı localStorage'a kaydediyoruz
      localStorage.setItem('name', name); // Admin adını kaydediyoruz

      navigate('/admin'); // Admin paneline yönlendir
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message); // Hata mesajını al
        console.log('Error Response:', error.response.data.message); // Hata mesajını konsola yazdır
      } else {
        setErrorMessage('Bir hata oluştu');
        console.log('Error:', error); // Diğer hataları logla
      }
    }
  };

  return (
    <>
      <PageTitle title='Giriş Yap'/>
      
      <div className="loginpage">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="loginlogo">Beeonhive</div>
            </div>
          </div>
        </div>
        <div className="turnhome">
          <a href="/"><b>Ana Sayfaya Dön</b></a>
        </div>
        <div className="card">
          <div className="logincard">
            <div className="logincardbody">
              <p className="login-box-msg">Oturumunuzu başlatmak için giriş yapın</p>
            </div>
            <div className="input-group">
              <input 
                type="email" 
                id="email" 
                className="email" 
                placeholder="E-mail" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
              <span className="icon-group icon-group-email">
                <FontAwesomeIcon icon={faEnvelope} className="icon-small" />
              </span>
            </div>
            <div className="input-group">
              <input 
                type="password" 
                id="password" 
                className="formcontrol" 
                placeholder="Şifre"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
              <span className="icon-group icon-group-password">
                <FontAwesomeIcon icon={faLock} className="icon-small" />
              </span>
            </div>
            <div className="row">
              <div className="col-6">
                <button type="submit" id="btngiris" className="btngirisyap" onClick={handleLogin}>
                  Giriş Yap
                </button>
              </div>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <p className="sifremiunuttum">
              <a href="" target="_blank">Şifremi unuttum</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
