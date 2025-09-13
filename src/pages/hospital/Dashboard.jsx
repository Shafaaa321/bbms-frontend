// src/pages/hospital/Dashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  // Dummy summary data
  const stats = [
    { label: 'Total Requests', count: 42 },
    { label: 'Approved', count: 27 },
    { label: 'Pending', count: 10 },
    { label: 'Rejected', count: 5 }
  ];

  const bloodStock = [
    { type: 'O+', units: 10 },
    { type: 'A+', units: 6 },
    { type: 'B−', units: 3 },
    { type: 'AB+', units: 7 }
  ];

  return (
    <div className="hospital-dashboard">
      <h2>Hospital Dashboard</h2>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h4>{stat.label}</h4>
            <p>{stat.count}</p>
          </div>
        ))}
      </div>

      <div className="section">
        <h3>Blood Stock Summary</h3>
        <div className="stock-grid">
          {bloodStock.map((item, index) => (
            <div key={index} className="stock-card">
              <h5>{item.type}</h5>
              <p>{item.units} Units</p>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-button">
        <button onClick={() => navigate('/hospital/request-blood')}>
          Request Blood
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
