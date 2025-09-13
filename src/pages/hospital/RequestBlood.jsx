// src/pages/hospital/RequestBlood.jsx
import React, { useState } from 'react';
import './RequestBlood.css';

const RequestBlood = () => {
  const [formData, setFormData] = useState({
    bloodType: '',
    quantity: '',
    urgency: '',
    deliveryMethod: '',
    reason: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Request:', formData);
    // TODO: Send request to backend
    alert('Blood request submitted for approval!');
    setFormData({
      bloodType: '',
      quantity: '',
      urgency: '',
      deliveryMethod: '',
      reason: '',
    });
  };

  return (
    <div className="request-blood-container">
      <h2>Request Blood</h2>
      <form className="request-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Blood Type</label>
          <select name="bloodType" value={formData.bloodType} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="A+">A+</option>
            <option value="A−">A−</option>
            <option value="B+">B+</option>
            <option value="B−">B−</option>
            <option value="O+">O+</option>
            <option value="O−">O−</option>
            <option value="AB+">AB+</option>
            <option value="AB−">AB−</option>
          </select>
        </div>

        <div className="form-group">
          <label>Quantity (Units)</label>
          <input
            type="number"
            name="quantity"
            min="1"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Urgency Level</label>
          <select name="urgency" value={formData.urgency} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
            <option value="Emergency">Emergency</option>
          </select>
        </div>

        <div className="form-group">
          <label>Delivery Method</label>
          <select name="deliveryMethod" value={formData.deliveryMethod} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Pickup">Pickup</option>
            <option value="Delivery">Delivery</option>
          </select>
        </div>

        <div className="form-group">
          <label>Case Note / Reason</label>
          <textarea
            name="reason"
            rows="4"
            placeholder="Provide patient info or reason for request"
            value={formData.reason}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">Submit Request</button>
      </form>
    </div>
  );
};

export default RequestBlood;
