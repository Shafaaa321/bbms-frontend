// src/pages/admin/RegisteredDonors.jsx
import React, { useEffect, useState } from 'react';
import './RegisteredDonors.css';
import axios from 'axios'; // For backend fetching

const RegisteredDonors = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch donors from backend
  useEffect(() => {
    const fetchDonors = async () => {
      try {
        // Replace with your backend API endpoint
        const response = await axios.get('/api/donors');
        setDonors(response.data);
      } catch (error) {
        console.error('Error fetching donors:', error);
        // For now, use dummy data if backend is not ready
        setDonors([
          { id: 1, name: 'John Doe', email: 'john@example.com', bloodGroup: 'O+', phone: '08012345678', registeredAt: '2024-03-01' },
          { id: 2, name: 'Jane Smith', email: 'jane@example.com', bloodGroup: 'A-', phone: '08087654321', registeredAt: '2024-03-05' },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchDonors();
  }, []);

  if (loading) return <p>Loading donors...</p>;

  return (
    <div className="registered-donors">
      <h2>Registered Donors</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Blood Group</th>
            <th>Phone</th>
            <th>Registration Date</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((donor) => (
            <tr key={donor.id}>
              <td>{donor.name}</td>
              <td>{donor.email}</td>
              <td>{donor.bloodGroup}</td>
              <td>{donor.phone}</td>
              <td>{donor.registeredAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegisteredDonors;
