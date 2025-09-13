// src/pages/staff/ManageAppointments.jsx
import React, { useState } from 'react';
import './ManageAppointments.css';

const mockAppointments = [
  {
    id: 1,
    donor: 'Aisha Sule',
    date: '2025-08-01',
    time: '10:00 AM',
    status: 'scheduled',
  },
  {
    id: 2,
    donor: 'Kehinde Olu',
    date: '2025-08-02',
    time: '2:00 PM',
    status: 'scheduled',
  },
];

const ManageAppointments = () => {
  const [appointments, setAppointments] = useState(mockAppointments);

  const handleComplete = (id) => {
    const updated = appointments.map((appt) =>
      appt.id === id ? { ...appt, status: 'completed' } : appt
    );
    setAppointments(updated);
  };

  return (
    <div className="appointments-page">
      <h2>Manage Appointments</h2>
      <table>
        <thead>
          <tr>
            <th>Donor</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appt) => (
            <tr key={appt.id}>
              <td>{appt.donor}</td>
              <td>{appt.date}</td>
              <td>{appt.time}</td>
              <td>{appt.status}</td>
              <td>
                {appt.status === 'scheduled' && (
                  <button onClick={() => handleComplete(appt.id)}>
                    Mark as Completed
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAppointments;
