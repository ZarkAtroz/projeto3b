// src/components/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userService from '../services/userService';

function Register() {
  const [email, setEmail] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.register(email, dataNasc, password);
      alert('Usuário registrado com sucesso!');
      navigate('/login');
    } catch (error) {
      alert('Erro no registro: ' + error.response?.data?.error || error.message);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Registrar</h2>
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
          <label>Data de Nascimento:</label><br />
          <input
            type="date"
            value={dataNasc}
            onChange={(e) => setDataNasc(e.target.value)}
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
        <button type="submit">Registrar</button>
      </form>
      <p>
        Já tem uma conta? <a href="/login">Faça login</a>
      </p>
    </div>
  );
}

export default Register;
