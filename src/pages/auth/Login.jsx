// src/pages/auth/Login.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRole } from '../../RoleContext';
import { FaUserShield, FaHeartbeat, FaHandHoldingHeart, FaUserTie } from 'react-icons/fa';
import './Login.css';

const Login = () => {
  const { setRole, setSubRole } = useRole();
  const navigate = useNavigate();

  const handleSelect = (selectedRole) => {
    if (selectedRole === 'admin') {
      setRole('admin');
      setSubRole(null);
    } else if (selectedRole === 'donor') {
      setRole('user');
      setSubRole('donor');
    } else if (selectedRole === 'receiver') {
      setRole('user');
      setSubRole('receiver');
    } else if (selectedRole === 'staff') {
      setRole('staff');
      setSubRole(null);
    }
    navigate('/login-form');
  };

  return (
    <div className="role-select-container">
      <div className="heading">
        <h1>Welcome to Blood Donor App</h1>
        <p>Select your role to continue</p>
      </div>

      <div className="roles-grid">
        <div className="role-card admin" onClick={() => handleSelect('admin')}>
          <FaUserShield size={28} />
          <span>Admin</span>
        </div>
        <div className="role-card donor" onClick={() => handleSelect('donor')}>
          <FaHandHoldingHeart size={28} />
          <span>Donor</span>
        </div>
        <div className="role-card hospital" onClick={() => handleSelect('receiver')}>
          <FaHeartbeat size={28} />
          <span>Hospital</span>
        </div>
        <div className="role-card staff" onClick={() => handleSelect('staff')}>
          <FaUserTie size={28} />
          <span>Staff</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
