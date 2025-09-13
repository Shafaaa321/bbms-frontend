// src/pages/hospital/Notifications.jsx
import React from 'react';
import './Notifications.css';

const Notifications = () => {
  const notifications = [
    {
      message: 'Your request for 5 units of O− has been approved.',
      type: 'success',
      time: '2 hours ago',
    },
    {
      message: 'A new batch of AB+ is now available.',
      type: 'info',
      time: 'Today, 9:15 AM',
    },
    {
      message: 'Reminder: pickup for B− is ready at central bank location.',
      type: 'warning',
      time: 'Yesterday, 4:30 PM',
    },
    {
      message: 'Your recent request for A− was rejected. Please contact admin.',
      type: 'error',
      time: '2 days ago',
    }
  ];

  const getTypeClass = (type) => {
    switch (type) {
      case 'success':
        return 'notif-success';
      case 'info':
        return 'notif-info';
      case 'warning':
        return 'notif-warning';
      case 'error':
        return 'notif-error';
      default:
        return '';
    }
  };

  return (
    <div className="notifications-container">
      <h2>Notifications</h2>
      <div className="notifications-list">
        {notifications.map((note, index) => (
          <div key={index} className={`notification-card ${getTypeClass(note.type)}`}>
            <p className="message">{note.message}</p>
            <p className="time">{note.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
