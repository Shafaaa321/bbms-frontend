// src/pages/auth/LoginForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRole } from '../../RoleContext';
import './LoginForm.css';

const LoginForm = () => {
  const { role, subRole, setIsLoggedIn } = useRole(); // ✅ Removed setSubRole
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);

    if (role === 'admin') {
      navigate('/admin/dashboard');
    } else if (role === 'staff') {
      navigate('/staff/dashboard');
    } else if (role === 'user') {
      if (subRole === 'donor') {
        navigate('/donor/dashboard');
      } else if (subRole === 'receiver') {
        navigate('/hospital/dashboard');
      }
    }
  };

  return (
    <div className="login-form-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>

        {role === 'user' && subRole === 'donor' && (
          <p className="register-link">
            Don't have an account?{' '}
            <span onClick={() => navigate('/register-donor')}>Register as Donor</span>
          </p>
        )}

        {role === 'user' && subRole === 'receiver' && (
          <p className="register-link">
            Don't have an account?{' '}
            <span onClick={() => navigate('/register-hospital')}>Register Hospital</span>
          </p>
        )}

        {role === 'staff' && (
          <p className="register-link">Login access granted by admin.</p>
        )}

        {role === 'admin' && (
          <p className="register-link">You are logging in as Admin.</p>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
