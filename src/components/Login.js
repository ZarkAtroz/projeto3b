// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userService from '../services/userService';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(email, password);
      navigate('/users');
    } catch (error) {
      alert('Erro no login: ' + error.response?.data?.error || error.message);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '200px' }}
          />
        </div>
        <div>
          <label>Senha:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '200px' }}
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
      <p>
        Não tem uma conta? <a href="/register">Registre-se</a>
      </p>
    </div>
  );
}

export default Login;
