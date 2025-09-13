// src/pages/admin/AuditLogs.jsx
import React from 'react';
import './AuditLogs.css';

const AuditLogs = () => {
  const logs = [
    { id: 1, action: 'Approved donor registration', user: 'Admin1', time: '2025-07-12 10:23' },
    { id: 2, action: 'Rejected hospital request', user: 'Admin2', time: '2025-07-12 09:45' },
    { id: 3, action: 'Added new blood unit', user: 'Admin1', time: '2025-07-11 16:00' },
    { id: 4, action: 'Updated donor eligibility rules', user: 'Admin3', time: '2025-07-10 13:14' },
  ];

  return (
    <div className="audit-logs-page">
      <h2>Audit Logs</h2>
      <table className="audit-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Action</th>
            <th>Performed By</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.id}>
              <td>{log.id}</td>
              <td>{log.action}</td>
              <td>{log.user}</td>
              <td>{log.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuditLogs;
