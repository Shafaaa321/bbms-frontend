// src/pages/staff/DonorRequests.jsx
import React, { useState } from 'react';
import './DonorRequests.css';

const mockRequests = [
  {
    id: 1,
    name: 'Alice Bello',
    bloodGroup: 'A+',
    status: 'pending',
    date: '2025-07-20',
  },
  {
    id: 2,
    name: 'Musa Garba',
    bloodGroup: 'O-',
    status: 'pending',
    date: '2025-07-22',
  },
];

const DonorRequests = () => {
  const [requests, setRequests] = useState(mockRequests);

  const handleDecision = (id, status) => {
    const updated = requests.map(req =>
      req.id === id ? { ...req, status } : req
    );
    setRequests(updated);
  };

  return (
    <div className="staff-donor-requests">
      <h2>Pending Donor Requests</h2>
      {requests.filter(r => r.status === 'pending').length === 0 ? (
        <p>No pending requests</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Blood Group</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) =>
              req.status === 'pending' ? (
                <tr key={req.id}>
                  <td>{req.name}</td>
                  <td>{req.bloodGroup}</td>
                  <td>{req.date}</td>
                  <td>
                    <button onClick={() => handleDecision(req.id, 'approved')}>Approve</button>
                    <button onClick={() => handleDecision(req.id, 'rejected')}>Reject</button>
                  </td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DonorRequests;
