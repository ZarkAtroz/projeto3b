// src/components/UserList.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import userService from '../services/userService';

function UserList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  useEffect(() => {
    async function fetchUsers() {
      try {
        const usersData = await userService.getAllUsers();
        setUsers(usersData);
      } catch (error) {
        alert('Erro ao buscar usuários: ' + error.response?.data?.error || error.message);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Lista de Usuários</h2>
      <button onClick={handleLogout}>Logout</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Email: {user.email} - <Link to={`/users/${user.id}`}>Ver detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
