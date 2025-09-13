// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  FaBars,
  FaHome,
  FaCheckCircle,
  FaHistory,
  FaBell,
  FaSignOutAlt,
  FaClipboardList,
  FaChartBar,
  FaBox,
  FaHospital,
} from 'react-icons/fa';
import { useRole } from '../RoleContext';
import './Sidebar.css';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const { role, subRole, logout } = useRole();

  const effectiveRole = role === 'user' ? subRole : role;

  const navItems = {
    donor: [
  { path: 'dashboard', icon: <FaHome />, label: 'Dashboard' },
  { path: 'eligibility', icon: <FaCheckCircle />, label: 'Eligibility' },
  { path: 'history', icon: <FaHistory />, label: 'History' },
  { path: 'request-donate', icon: <FaClipboardList />, label: 'Request to Donate' }, // <-- fixed path
  { path: 'notifications', icon: <FaBell />, label: 'Notifications' },
],

    receiver: [
      { path: 'dashboard', icon: <FaHome />, label: 'Dashboard' },
      { path: 'request-blood', icon: <FaClipboardList />, label: 'Request Blood' },
      { path: 'inventory', icon: <FaBox />, label: 'Blood Inventory' },
      { path: 'request-status', icon: <FaCheckCircle />, label: 'Request Status' },
      { path: 'notifications', icon: <FaBell />, label: 'Notifications' },
    ],
    admin: [
      { path: 'dashboard', icon: <FaHome />, label: 'Dashboard' },
      { path: 'approve-hospitals', icon: <FaHospital />, label: 'Approve Hospitals' },
      { path: 'hospital-activities', icon: <FaHospital />, label: 'Hospital Activities' },
       { path: 'donation-records', icon: <FaHistory />, label: 'Donation Records' },
      { path: 'analytics', icon: <FaChartBar />, label: 'Analytics' },
      { path: 'audit-logs', icon: <FaClipboardList />, label: 'Audit Logs' },
      { path: 'settings', icon: <FaBell />, label: 'Settings' },
    ],
    staff: [
      { path: 'dashboard', icon: <FaHome />, label: 'Dashboard' },
      { path: 'donor-requests', icon: <FaClipboardList />, label: 'Donor Requests' },
      { path: 'manage-appointments', icon: <FaCheckCircle />, label: 'Manage Appointments' },
      { path: 'notifications', icon: <FaBell />, label: 'Notifications' },
    ],
  };

  const basePath =
    role === 'admin'
      ? '/admin'
      : role === 'user' && subRole === 'receiver'
      ? '/hospital'
      : role === 'staff'
      ? '/staff'
      : '/donor';

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className={`sidebar-wrapper ${expanded ? 'expanded' : ''}`}>
      <div className="top-section">
        <button onClick={() => setExpanded(!expanded)} className="toggle-btn">
          <FaBars />
        </button>
        {expanded && <h2 className="sidebar-title">Blood Donor App</h2>}
      </div>

      <ul className="nav-links">
        {navItems[effectiveRole]?.map((item, index) => (
          <li key={index}>
            <NavLink
              to={`${basePath}/${item.path}`}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {item.icon}
              {expanded && <span>{item.label}</span>}
            </NavLink>
          </li>
        ))}
      </ul>

      <button className="logout-btn" onClick={handleLogout}>
        <FaSignOutAlt />
        {expanded && <span>Logout</span>}
      </button>
    </div>
  );
};

export default Sidebar;
