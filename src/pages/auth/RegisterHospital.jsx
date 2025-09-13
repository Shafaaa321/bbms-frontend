import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterForm.css';

const RegisterHospital = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    address: '',
    license: null,
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'license') {
      setFormData((prev) => ({ ...prev, license: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    const { name, email, phone, type, address, license } = formData;
    if (!name || !email || !phone || !type || !address || !license) {
      setError('Please fill in all fields and upload your license.');
      return;
    }

    // Simulate successful application
    setSuccess('Application submitted successfully! Wait for admin approval.');
    setError('');

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      type: '',
      address: '',
      license: null,
    });

    // Optionally redirect back to login
    setTimeout(() => {
      navigate('/login-form');
    }, 3000);
  };

  return (
    <div className="register-form-container">
      <h2>Hospital Application Form</h2>

      {error && <p className="error-msg">{error}</p>}
      {success && <p className="success-msg">{success}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Hospital Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Hospital Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="">Select Hospital Type</option>
          <option value="Private">Private</option>
          <option value="Government">Government</option>
        </select>
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <label className="file-label">
  Upload License Document:
  <input
    type="file"
    name="license"
    accept=".pdf,.jpg,.jpeg,.png"
    onChange={handleChange}
  />
</label>


        <button type="submit">Submit Application</button>
      </form>

      <p className="login-link">
        Already approved?{' '}
        <span onClick={() => navigate('/login-form')}>Login</span>
      </p>
    </div>
  );
};

export default RegisterHospital;
