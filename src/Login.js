import React, { useState } from 'react';
import './Login.css';
import logo from './images/logo_2.jpg'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de soumission du formulaire ici
    console.log('Email:', email);
    console.log('Mot de passe:', password);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <img src={logo} alt="LOGO CIH" />
        <h2>Connexion</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Connexion</button>
        </form>
      </div>
    </div>
  );
};

export default Login;