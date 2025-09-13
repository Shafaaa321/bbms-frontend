import React from 'react';
import './AdminDashboard.css';
import { useNavigate } from 'react-router-dom';
import { FaUserCheck, FaHospitalSymbol, FaChartBar, FaClipboardList } from 'react-icons/fa';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    {
      title: 'Pending Donors',
      count: 8,
      icon: <FaUserCheck />,
      link: '/admin/approve-donors',
      bg: 'card-red',
    },
    {
      title: 'Pending Hospitals',
      count: 4,
      icon: <FaHospitalSymbol />,
      link: '/admin/approve-hospitals',
      bg: 'card-blue',
    },
    {
      title: 'Audit Logs',
      count: 120,
      icon: <FaClipboardList />,
      link: '/admin/audit-logs',
      bg: 'card-yellow',
    },
    {
      title: 'Analytics',
      count: 'View',
      icon: <FaChartBar />,
      link: '/admin/analytics',
      bg: 'card-green',
    },
  ];

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <p className="welcome-text">Welcome, Admin! Here’s an overview of the system status.</p>

      <div className="stats-grid">
        {stats.map((item, i) => (
          <div
            key={i}
            className={`stat-card ${item.bg}`}
            onClick={() => navigate(item.link)}
          >
            <div className="icon">{item.icon}</div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.count}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
