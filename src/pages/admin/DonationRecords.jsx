// src/pages/staff/DonationRecords.jsx
import React, { useState } from 'react';
import './DonationRecords.css';

const mockRecords = [
  {
    id: 1,
    donorName: 'Aisha Sule',
    bloodGroup: 'A+',
    date: '2025-07-01',
    volume: '450ml',
  },
  {
    id: 2,
    donorName: 'Kehinde Olu',
    bloodGroup: 'B-',
    date: '2025-07-05',
    volume: '500ml',
  },
];

const DonationRecords = () => {
  const [records] = useState(mockRecords);


  return (
    <div className="records-page">
      <h2>Donation Records</h2>
      <table>
        <thead>
          <tr>
            <th>Donor</th>
            <th>Blood Group</th>
            <th>Date</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.donorName}</td>
              <td>{record.bloodGroup}</td>
              <td>{record.date}</td>
              <td>{record.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonationRecords;
