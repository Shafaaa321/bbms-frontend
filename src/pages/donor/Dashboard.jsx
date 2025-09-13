// src/pages/donor/Dashboard.jsx
import React from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

const DonorDashboard = () => {
  const navigate = useNavigate();

  const profile = {
    name: 'John Doe',
    bloodGroup: 'O+',
    donations: 4,
    lastDonation: '2024-03-20',
    eligible: true,
  };

  return (
    <div className="donor-dashboard">
      <h2>Welcome, {profile.name}</h2>

      <div className="card-container">
        <div className="info-card red">
          <h3>Blood Group</h3>
          <p>{profile.bloodGroup}</p>
        </div>
        <div className="info-card green">
          <h3>Total Donations</h3>
          <p>{profile.donations}</p>
        </div>
        <div className="info-card yellow">
          <h3>Last Donation</h3>
          <p>{profile.lastDonation}</p>
        </div>
        <div className="info-card green">
          <h3>Eligibility</h3>
          <p>{profile.eligible ? 'Eligible' : 'Not Eligible'}</p>
        </div>
      </div>

      <div className="button-group">
        <button
          className="donate-btn"
          onClick={() => navigate('/donor/eligibility')}
        >
          Donor Eligibility
        </button>
        <button
          className="request-btn"
          onClick={() => navigate('/donor/request-donate')}
        >
          Request to Donate
        </button>
      </div>
    </div>
  );
};

export default DonorDashboard;
