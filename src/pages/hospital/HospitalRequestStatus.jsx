// src/pages/hospital/HospitalRequestStatus.jsx
import React, { useState, useEffect } from 'react';
import './HospitalRequestStatus.css';

const mockData = [
  {
    id: 'REQ001',
    bloodType: 'O+',
    quantity: 4,
    urgency: 'High',
    status: 'Pending',
    date: '2025-07-14'
  },
  {
    id: 'REQ002',
    bloodType: 'A−',
    quantity: 2,
    urgency: 'Low',
    status: 'Approved',
    date: '2025-07-13'
  },
  {
    id: 'REQ003',
    bloodType: 'B+',
    quantity: 3,
    urgency: 'Medium',
    status: 'Rejected',
    date: '2025-07-10'
  }
];

const HospitalRequestStatus = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Replace with real API call in production
    setRequests(mockData);
  }, []);

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'status pending';
      case 'approved':
        return 'status approved';
      case 'rejected':
        return 'status rejected';
      case 'fulfilled':
        return 'status fulfilled';
      default:
        return 'status';
    }
  };

  return (
    <div className="request-status-container">
      <h2>Track Blood Requests</h2>

      <table className="request-table">
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Blood Type</th>
            <th>Quantity</th>
            <th>Urgency</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req) => (
            <tr key={req.id}>
              <td>{req.id}</td>
              <td>{req.bloodType}</td>
              <td>{req.quantity} unit(s)</td>
              <td>{req.urgency}</td>
              <td><span className={getStatusClass(req.status)}>{req.status}</span></td>
              <td>{req.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HospitalRequestStatus;
