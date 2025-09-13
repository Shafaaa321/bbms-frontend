// src/pages/donor/AvailableDonors.jsx
import React from 'react';
import './AvailableDonors.css';

const mockDonors = [
  {
    id: 1,
    name: 'Sarah Johnson',
    bloodGroup: 'A+',
    location: 'Abuja',
    phone: '08012345678',
  },
  {
    id: 2,
    name: 'Michael Smith',
    bloodGroup: 'B-',
    location: 'Lagos',
    phone: '08087654321',
  },
  {
    id: 3,
    name: 'Fatima Musa',
    bloodGroup: 'O+',
    location: 'Kano',
    phone: '08111223344',
  },
];

const AvailableDonors = () => {
  return (
    <div className="available-donors-page">
      <h2>Available Donors Near You</h2>
      <div className="donor-cards">
        {mockDonors.map((donor) => (
          <div key={donor.id} className="donor-card">
            <h3>{donor.name}</h3>
            <p><strong>Blood Group:</strong> {donor.bloodGroup}</p>
            <p><strong>Location:</strong> {donor.location}</p>
            <p><strong>Phone:</strong> {donor.phone}</p>
            <button className="contact-btn">Contact</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableDonors;
