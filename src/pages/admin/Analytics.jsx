import React from 'react';
import './Analytics.css';

const Analytics = () => {
  return (
    <div className="admin-analytics">
      <h2>Analytics Dashboard</h2>
      <div className="analytics-grid">
        <div className="analytics-card">
          <h4>Total Donations</h4>
          <p>132</p>
        </div>
        <div className="analytics-card">
          <h4>Hospitals Registered</h4>
          <p>26</p>
        </div>
        <div className="analytics-card">
          <h4>Pending Requests</h4>
          <p>8</p>
        </div>
        <div className="analytics-card">
          <h4>Approved Requests</h4>
          <p>94</p>
        </div>
        <div className="analytics-card">
          <h4>Rejected Requests</h4>
          <p>12</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
