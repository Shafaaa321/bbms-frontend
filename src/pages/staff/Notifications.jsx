// src/pages/staff/Notifications.jsx
import React, { useState } from 'react';
import './Notifications.css';

const mockNotifications = [
  {
    id: 1,
    message: 'New blood donation request from John Doe',
    time: '2 hours ago',
    read: false,
  },
  {
    id: 2,
    message: 'Mercy Care Hospital application approved',
    time: '1 day ago',
    read: true,
  },
  {
    id: 3,
    message: 'System update: Inventory module enhanced',
    time: '3 days ago',
    read: true,
  },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(mockNotifications);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  return (
    <div className="staff-notifications">
      <h2>Notifications</h2>
      <ul>
        {notifications.map((note) => (
          <li key={note.id} className={note.read ? 'read' : 'unread'}>
            <div className="note-content">
              <p>{note.message}</p>
              <span className="time">{note.time}</span>
            </div>
            {!note.read && (
              <button onClick={() => markAsRead(note.id)}>Mark as read</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
