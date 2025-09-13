import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterForm.css';

const RegisterDonor = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    bloodGroup: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.bloodGroup ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError('Please fill in all fields.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // ✅ Simulate registration success
    alert('Donor registered successfully!');
    navigate('/login-form');
  };

  return (
    <div className="register-form-container">
      <h2>Register as Donor</h2>

      {error && <p className="error-msg">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
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
        <select
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
        >
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A−</option>
          <option value="B+">B+</option>
          <option value="B-">B−</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB−</option>
          <option value="O+">O+</option>
          <option value="O-">O−</option>
        </select>
        <input
          type="password"
          name="password"
          placeholder="Create Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <button type="submit">Register</button>
      </form>

      <p className="login-link">
        Already have an account?{' '}
        <span onClick={() => navigate('/login-form')}>Login</span>
      </p>
    </div>
  );
};

export default RegisterDonor;
