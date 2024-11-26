// src/components/UserDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import userService from '../services/userService';

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/users');
  };

  useEffect(() => {
    async function fetchUser() {
      try {
        const userData = await userService.getUserById(id);
        setUser(userData);
      } catch (error) {
        alert('Erro ao buscar usuário: ' + error.response?.data?.error || error.message);
      }
    }
    fetchUser();
  }, [id]);

  if (!user) return <p>Carregando...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Detalhes do Usuário</h2>
      <p>ID: {user.id}</p>
      <p>Email: {user.email}</p>
      <p>Data de Nascimento: {user.data_nasc}</p>
      <button onClick={handleBack}>Voltar</button>
    </div>
  );
}

export default UserDetails;
