// src/components/NavbarMobile.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRole } from '../RoleContext';
import {
  FaBars,
  FaTachometerAlt,
  FaUserPlus,
  FaTint,
  FaUsers,
  FaBox,
  FaBell,
  FaCog,
  FaSignOutAlt
} from 'react-icons/fa';
import './NavbarMobile.css';

const NavbarMobile = () => {
  const { setIsLoggedIn, setRole, setSubRole } = useRole();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    setRole(null);
    setSubRole(null);
    navigate('/');
  };

  return (
    <div className="navbar-mobile">
      <div className="navbar-header">
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>
        <span className="app-title">Blood Donor App</span>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/user/dashboard"><FaTachometerAlt /> Dashboard</Link>
          <Link to="/user/donor-registration"><FaUserPlus /> Register Donor</Link>
          <Link to="/user/request-blood"><FaTint /> Request Blood</Link>
          <Link to="/user/available-donors"><FaUsers /> Available Donors</Link>
          <Link to="/user/blood-inventory"><FaBox /> Blood Inventory</Link>
          <Link to="/user/notifications"><FaBell /> Notifications</Link>
          <Link to="/user/settings"><FaCog /> Settings</Link>
          <button onClick={handleLogout} className="logout-btn">
            <FaSignOutAlt /> Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default NavbarMobile;
