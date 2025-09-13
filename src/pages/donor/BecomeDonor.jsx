import React, { useState } from 'react';
import './BecomeDonor.css';

const BecomeDonor = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    bloodGroup: '',
    age: '',
    gender: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit form to backend
    console.log('Donor registered:', formData);
    alert('Registration successful! Awaiting approval.');
  };

  return (
    <div className="become-donor-page">
      <h1>Become a Blood Donor</h1>
      <p className="subtitle">Help save lives by registering as a donor today.</p>

      <form className="donor-form" onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Phone Number</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

        <label>Blood Group</label>
        <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required>
          <option value="">-- Select --</option>
          <option value="A+">A+</option>
          <option value="A−">A−</option>
          <option value="B+">B+</option>
          <option value="B−">B−</option>
          <option value="O+">O+</option>
          <option value="O−">O−</option>
          <option value="AB+">AB+</option>
          <option value="AB−">AB−</option>
        </select>

        <label>Age</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} required />

        <label>Gender</label>
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">-- Select --</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label>Location</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} required />

        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
};

export default BecomeDonor;
