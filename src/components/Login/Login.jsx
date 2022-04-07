import React from 'react';
import * as S from './Login.styled';

import user from '../../img/user.png';
import lock from '../../img/lock.png';

const Login = () => {
  return (
    <S.Container>
      <S.Thumbnail>
        <span>Login Form</span>
      </S.Thumbnail>
      <S.Form>
        <label htmlFor="username">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            required
          />
          <img src={user} alt="" />
        </label>

        <label htmlFor="password">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
          <img src={lock} alt="" />
        </label>

        <label>
          <button>Sign In</button>
        </label>
      </S.Form>
    </S.Container>
  );
};

export default Login;
