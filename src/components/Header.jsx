// src/components/Header.jsx
import React from 'react';
import { useRole } from '../RoleContext';
import './Header.css';

const Header = () => {
  const { role, subRole } = useRole();

  // Determine display name
  const displayRole =
  role === 'admin'
    ? 'Admin'
    : role === 'staff'
    ? 'Staff Member'
    : subRole === 'donor'
    ? 'Donor'
    : subRole === 'receiver'
    ? 'Hospital'
    : 'User';

  return (
    <header className="main-header">
      <div className="left-section">
        <h1>Blood Donor App</h1>
      </div>
      <div className="right-section">
        <span className="role-badge">{displayRole}</span>
      </div>
    </header>
  );
};

export default Header;
