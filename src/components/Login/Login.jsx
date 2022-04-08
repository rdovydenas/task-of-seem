import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './Login.styled';

import userIcon from '../../img/user.png';
import lockIcon from '../../img/lock.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    axios
      .get('https://625001ace3e5d24b3419f99f.mockapi.io/credentials')
      .then((res) => {
        if (
          res.data[0].username === localStorage.getItem('username') &&
          res.data[0].password === localStorage.getItem('password')
        ) {
          alert('You are logged in!');
        }
      })
      .catch((err) => err);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    axios
      .get('https://625001ace3e5d24b3419f99f.mockapi.io/credentials')
      .then((res) => {
        if (
          res.data[0].username === username &&
          res.data[0].password === password
        ) {
          alert('You are logged in!');
        } else {
          alert('Invalid credentials');
        }
      })
      .catch((err) => err);
  };

  return (
    <S.Container>
      <S.Thumbnail>
        <span>Login Form</span>
        <button
          onClick={() => {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
            alert('You are logged out!');
          }}
        >
          Log Out
        </button>
      </S.Thumbnail>
      <S.Form onSubmit={handleSubmit}>
        <label htmlFor="username">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <img src={userIcon} alt="user-icon" />
        </label>

        <label htmlFor="password">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <img src={lockIcon} alt="lock-icon" />
        </label>

        <label>
          <button type="submit">Sign In</button>
        </label>
      </S.Form>
    </S.Container>
  );
};

export default Login;
