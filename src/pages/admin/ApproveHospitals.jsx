// src/pages/admin/ApproveHospitals.jsx
import React, { useState } from 'react';
import './ApproveHospitals.css';

const mockApplications = [
  {
    id: 1,
    name: 'Mercy Care Hospital',
    type: 'Private',
    email: 'mercycare@example.com',
    phone: '08123456789',
    licenseFile: 'license_1.pdf',
    status: 'pending',
  },
  {
    id: 2,
    name: 'General Hospital Kano',
    type: 'Government',
    email: 'ghk@example.com',
    phone: '08011223344',
    licenseFile: 'license_2.jpg',
    status: 'pending',
  },
];

const ApproveHospitals = () => {
  const [applications, setApplications] = useState(mockApplications);
  const [message, setMessage] = useState('');

  const handleDecision = (id, decision) => {
    const updated = applications.map((app) =>
      app.id === id ? { ...app, status: decision } : app
    );
    setApplications(updated);

    if (decision === 'approved') {
      setMessage('✅ Login credentials sent to hospital email (simulated)');
    } else {
      setMessage('❌ Hospital application rejected.');
    }

    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="approve-hospitals-container">
      <h2>Pending Hospital Applications</h2>

      {message && <p className="status-message">{message}</p>}

      {applications.filter((app) => app.status === 'pending').length === 0 ? (
        <p>No pending hospital applications at this time.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Email</th>
              <th>Phone</th>
              <th>License File</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications
              .filter((app) => app.status === 'pending')
              .map((app) => (
                <tr key={app.id}>
                  <td>{app.name}</td>
                  <td>{app.type}</td>
                  <td>{app.email}</td>
                  <td>{app.phone}</td>
                  <td>
                    <button
  onClick={(e) => e.preventDefault()}
  className="license-link"
>
  {app.licenseFile}
</button>

                  </td>
                  <td>
                    <button
                      className="approve"
                      onClick={() => handleDecision(app.id, 'approved')}
                    >
                      Approve
                    </button>
                    <button
                      className="reject"
                      onClick={() => handleDecision(app.id, 'rejected')}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ApproveHospitals;
