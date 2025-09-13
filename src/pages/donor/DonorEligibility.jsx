import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DonorEligibility.css';

const DonorEligibility = () => {
  const navigate = useNavigate();
  const [checks, setChecks] = useState({
    age: false,
    weight: false,
    recentDonation: false,
    illness: false,
    pregnancy: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setChecks((prev) => ({ ...prev, [name]: checked }));
  };

  const isEligible = Object.values(checks).every(Boolean);

  return (
    <div className="eligibility-page">
      <h1>Blood Donation Eligibility Checklist</h1>
      <div className="eligibility-card">
        <form>
          <label>
            <input type="checkbox" name="age" checked={checks.age} onChange={handleChange} />
            I am between 18 and 65 years old.
          </label>
          <label>
            <input type="checkbox" name="weight" checked={checks.weight} onChange={handleChange} />
            I weigh at least 50kg (110lbs).
          </label>
          <label>
            <input type="checkbox" name="recentDonation" checked={checks.recentDonation} onChange={handleChange} />
            I have not donated blood in the last 3 months.
          </label>
          <label>
            <input type="checkbox" name="illness" checked={checks.illness} onChange={handleChange} />
            I am not currently ill, on antibiotics, or have any infections.
          </label>
          <label>
            <input type="checkbox" name="pregnancy" checked={checks.pregnancy} onChange={handleChange} />
            I am not pregnant or recently postpartum (if applicable).
          </label>
        </form>

        {isEligible ? (
          <div className="eligible-msg">
            ✅ You are eligible to donate blood.
            <button
              className="request-btn"
              onClick={() => navigate('/donor/donation-request')} // ✅ Corrected path
            >
              Request to Donate
            </button>
          </div>
        ) : (
          <p className="not-eligible">
            ❌ You do not meet the full criteria yet. Please review the checklist.
          </p>
        )}
      </div>
    </div>
  );
};

export default DonorEligibility;
