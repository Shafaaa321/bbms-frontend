import React, { useEffect, useState } from 'react';
import './DonationHistory.css';

const mockHistory = [
  {
    date: '2024-10-12',
    location: 'Abuja Central Hospital',
    status: 'Completed',
    units: 1,
    badge: '⭐ Generous Donor',
  },
  {
    date: '2024-06-05',
    location: 'Lagos General Hospital',
    status: 'Completed',
    units: 1,
    badge: '🎖️ Life Saver',
  },
  {
    date: '2024-02-18',
    location: 'Kano State Hospital',
    status: 'Rejected',
    units: 0,
    badge: '❌',
  },
];

const DonationHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Simulate API call
    setHistory(mockHistory);
  }, []);

  return (
    <div className="donation-history-page">
      <h1>Donation History</h1>
      {history.length > 0 ? (
        <div className="history-list">
          {history.map((item, index) => (
            <div className="history-card" key={index}>
              <div className="history-row">
                <span className="label">Date:</span>
                <span>{item.date}</span>
              </div>
              <div className="history-row">
                <span className="label">Location:</span>
                <span>{item.location}</span>
              </div>
              <div className={`status ${item.status.toLowerCase()}`}>
                Status: {item.status}
              </div>
              <div className="history-row">
                <span className="label">Units Donated:</span>
                <span>{item.units}</span>
              </div>
              <div className="badge">
                {item.badge}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-history">You haven’t donated blood yet.</p>
      )}
    </div>
  );
};

export default DonationHistory;
