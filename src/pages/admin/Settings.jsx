// src/pages/admin/Settings.jsx
import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(false);

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  return (
    <div className="admin-settings-page">
      <h2>Admin Settings</h2>

      <div className="settings-section">
        <h4>Notification Preferences</h4>
        <label>
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
          />
          Enable Email Notifications
        </label>
        <label>
          <input
            type="checkbox"
            checked={smsAlerts}
            onChange={() => setSmsAlerts(!smsAlerts)}
          />
          Enable SMS Alerts
        </label>
      </div>

      <div className="settings-section">
        <h4>System Maintenance</h4>
        <button className="danger-btn">Reset All Requests</button>
        <button className="danger-btn">Clear Inventory Logs</button>
      </div>

      <button className="save-btn" onClick={handleSave}>
        Save Settings
      </button>
    </div>
  );
};

export default Settings;
