// src/pages/staff/ApproveBloodRequests.jsx
import React, { useState } from 'react';
import './ApproveBloodRequests.css';

const ApproveBloodRequests = () => {
  // Dummy data for now; backend will replace this
  const [requests, setRequests] = useState([
    {
      id: 1,
      hospitalName: 'AKTH Hospital',
      bloodType: 'O+',
      quantity: 3,
      urgency: 'High',
      status: 'Pending',
      pickupTime: null,
    },
    {
      id: 2,
      hospitalName: 'MMSH Hospital',
      bloodType: 'A−',
      quantity: 2,
      urgency: 'Moderate',
      status: 'Pending',
      pickupTime: null,
    },
  ]);

  const handleApprove = (id) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id
          ? { ...req, status: 'Approved', pickupTime: 'Tomorrow 10:00 AM' }
          : req
      )
    );
  };

  const handleReject = (id) => {
    setRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: 'Rejected' } : req))
    );
  };

  return (
    <div className="blood-requests-page">
      <h1>Hospital Blood Requests</h1>

      {requests.length === 0 ? (
        <p>No blood requests at the moment.</p>
      ) : (
        <div className="requests-list">
          {requests.map((req) => (
            <div key={req.id} className={`request-card ${req.status.toLowerCase()}`}>
              <h3>{req.hospitalName}</h3>
              <p>
                <strong>Blood Type:</strong> {req.bloodType}
              </p>
              <p>
                <strong>Quantity:</strong> {req.quantity} units
              </p>
              <p>
                <strong>Urgency:</strong> {req.urgency}
              </p>
              <p>
                <strong>Status:</strong>{' '}
                <span className={`status ${req.status.toLowerCase()}`}>{req.status}</span>
              </p>
              {req.pickupTime && (
                <p>
                  <strong>Pickup Time:</strong> {req.pickupTime}
                </p>
              )}

              {req.status === 'Pending' && (
                <div className="action-buttons">
                  <button className="approve-btn" onClick={() => handleApprove(req.id)}>
                    Approve
                  </button>
                  <button className="reject-btn" onClick={() => handleReject(req.id)}>
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ApproveBloodRequests;
