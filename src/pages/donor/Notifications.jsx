import React, { useEffect, useState } from 'react';
import './Notifications.css';

const mockNotifications = [
  {
    id: 1,
    message: '🎉 Your blood donation request has been approved by Admin.',
    type: 'success',
    date: '2025-07-10',
  },
  {
    id: 2,
    message: '❌ Your donation request on 2025-04-12 was rejected. Check eligibility.',
    type: 'error',
    date: '2025-04-13',
  },
  {
    id: 3,
    message: '📢 Reminder: You can donate again starting August 10.',
    type: 'info',
    date: '2025-07-15',
  },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setNotifications(mockNotifications);
  }, []);

  return (
    <div className="notifications-page">
      <h1>Notifications</h1>
      {notifications.length > 0 ? (
        <ul className="notification-list">
          {notifications.map((note) => (
            <li key={note.id} className={`notification-card ${note.type}`}>
              <div className="message">{note.message}</div>
              <div className="date">{note.date}</div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-notification">No notifications yet.</p>
      )}
    </div>
  );
};

export default Notifications;
