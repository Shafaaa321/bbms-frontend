// src/pages/staff/HospitalActivities.jsx
import React, { useState } from 'react';
import './HospitalActivities.css';

const mockActivities = [
  {
    id: 1,
    hospital: 'Mercy Care Hospital',
    activity: 'Requested 3 pints of O+ blood',
    date: '2025-07-24',
    status: 'Pending',
  },
  {
    id: 2,
    hospital: 'General Hospital Kano',
    activity: 'Updated inventory after blood transfusion',
    date: '2025-07-22',
    status: 'Completed',
  },
];

const HospitalActivities = () => {
  const [activities] = useState(mockActivities);

  return (
    <div className="hospital-activities-page">
      <h2>Hospital Activities</h2>
      <table>
        <thead>
          <tr>
            <th>Hospital</th>
            <th>Activity</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <tr key={activity.id}>
              <td>{activity.hospital}</td>
              <td>{activity.activity}</td>
              <td>{activity.date}</td>
              <td>{activity.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HospitalActivities;
