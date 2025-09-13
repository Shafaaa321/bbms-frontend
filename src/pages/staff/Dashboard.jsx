// src/pages/staff/Dashboard.jsx
import React from 'react';
import './Dashboard.css';

const StaffDashboard = () => {
  const stats = {
    pendingRequests: 12,
    activeHospitals: 5,
    upcomingAppointments: 3,
    notifications: 4,
  };

  return (
    <div className="staff-dashboard">
      <h2>Welcome, Staff Member</h2>

      <div className="dashboard-grid">
        <div className="dashboard-card red">
          <h3>Pending Requests</h3>
          <p>{stats.pendingRequests}</p>
        </div>

        <div className="dashboard-card green">
          <h3>Active Hospitals</h3>
          <p>{stats.activeHospitals}</p>
        </div>

        <div className="dashboard-card yellow">
          <h3>Upcoming Appointments</h3>
          <p>{stats.upcomingAppointments}</p>
        </div>

        <div className="dashboard-card blue">
          <h3>New Notifications</h3>
          <p>{stats.notifications}</p>
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;
