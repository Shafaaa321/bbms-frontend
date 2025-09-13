// src/pages/hospital/BloodInventory.jsx
import React, { useState } from 'react';
import './BloodInventory.css';

const BloodInventory = () => {
  const [search, setSearch] = useState('');

  const inventory = [
    { type: 'A+', units: 12 },
    { type: 'A−', units: 6 },
    { type: 'B+', units: 9 },
    { type: 'B−', units: 4 },
    { type: 'AB+', units: 7 },
    { type: 'AB−', units: 3 },
    { type: 'O+', units: 15 },
    { type: 'O−', units: 8 },
  ];

  const filteredInventory = inventory.filter((item) =>
    item.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="inventory-container">
      <h2>Blood Inventory</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search blood type (e.g. A+, O−)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="inventory-grid">
        {filteredInventory.map((item, index) => (
          <div key={index} className="blood-card">
            <div className="blood-type">{item.type}</div>
            <div className="blood-units">{item.units} units</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BloodInventory;
