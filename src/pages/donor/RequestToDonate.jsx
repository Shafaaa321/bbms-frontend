import React, { useState } from 'react';
import './RequestToDonate.css';

const RequestToDonate = () => {
  const [formData, setFormData] = useState({
    preferredDate: '',
    preferredLocation: '',
    availabilityNote: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic can go here (e.g. send to backend or context)
    setSubmitted(true);
  };

  return (
    <div className="request-donate">
      <h1>Request to Donate</h1>

      {submitted ? (
        <div className="donate-form">
          <h2>✅ Request Submitted</h2>
          <p>
            Thank you for your willingness to donate. Our team will review your
            request and notify you with the next steps.
          </p>
        </div>
      ) : (
        <form className="donate-form" onSubmit={handleSubmit}>
          <label htmlFor="preferredDate">Preferred Donation Date</label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            required
          />

          <label htmlFor="preferredLocation">Preferred Donation Location</label>
          <input
            type="text"
            id="preferredLocation"
            name="preferredLocation"
            value={formData.preferredLocation}
            onChange={handleChange}
            placeholder="e.g. Lagos General Hospital"
            required
          />

          <label htmlFor="availabilityNote">Availability Note</label>
          <input
            type="text"
            id="availabilityNote"
            name="availabilityNote"
            value={formData.availabilityNote}
            onChange={handleChange}
            placeholder="e.g. Weekends only, after 10am"
            required
          />

          <button type="submit" className="submit-btn">
            Submit Request
          </button>
        </form>
      )}
    </div>
  );
};

export default RequestToDonate;
