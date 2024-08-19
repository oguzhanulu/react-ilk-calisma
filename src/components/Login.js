import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'; 
import './Login.css';

function Login() {
  return (

    
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
            <input type="email" id="email" className="email" placeholder="E-mail" />
            <span className="icon-group icon-group-email">
              <FontAwesomeIcon icon={faEnvelope} className="icon-small" />
            </span>
          </div>
          <div className="input-group">
            <input type="password" id="password" className="formcontrol" placeholder="Şifre"/>
            <span className="icon-group icon-group-password">
              <FontAwesomeIcon icon={faLock} className="icon-small" />
            </span>
          </div>
          <div className="row">
            <div className="col-6">
              <button type="submit" id="btngiris" className="btngirisyap">Giriş Yap</button>
            </div>
          </div>
          <p className="sifremiunuttum">
            <a href="" target="_blank">Şifremi unuttum</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;