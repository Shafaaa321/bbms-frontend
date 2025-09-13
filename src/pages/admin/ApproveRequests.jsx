import React from 'react';
import './ApproveRequests.css';

const ApproveRequests = () => {
  return (
    <div className="approve-requests">
      <h2>Approve Blood Requests</h2>
      <div className="request-list">
        <div className="request-card">
          <div className="request-info">
            <h4>Hospital: Mercy General</h4>
            <p>Blood Type: O−</p>
            <p>Quantity: 4 Units</p>
            <p>Urgency: High</p>
          </div>
          <div className="request-actions">
            <button className="approve-btn">Approve</button>
            <button className="reject-btn">Reject</button>
          </div>
        </div>

        <div className="request-card">
          <div className="request-info">
            <h4>Hospital: Zenith Health</h4>
            <p>Blood Type: A+</p>
            <p>Quantity: 2 Units</p>
            <p>Urgency: Medium</p>
          </div>
          <div className="request-actions">
            <button className="approve-btn">Approve</button>
            <button className="reject-btn">Reject</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApproveRequests;
