'use client'

import React, { useState } from 'react';
import Dropdown from './Dropdown/Dropdown';
import dropdownOptions from './dropdownOptions.json';

const DropdownDemo = () => {
  // State for controlled components
  const [singleValue, setSingleValue] = useState(null);
  const [multiValue, setMultiValue] = useState([]);

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h1>Dropdown Component Demo</h1>
      <br></br>
      <section style={{ marginBottom: '30px' }}>
        <h2>Single Select</h2>
        <Dropdown 
          options={dropdownOptions}
          placeholder="Select something in my apartment..."
          value={singleValue}
          onChange={setSingleValue}
        />
        <div style={{ marginTop: '10px' }}>
          Selected value: {singleValue ? singleValue.label : 'None'}
        </div>
      </section>
      
      <section>
        <h2>Multi Select</h2>
        <Dropdown 
          options={dropdownOptions}
          placeholder="Select something in my apartment..."
          multiple={true}
          value={multiValue}
          onChange={setMultiValue}
        />
        <div style={{ marginTop: '10px' }}>
          Selected values: {multiValue.length > 0 
            ? multiValue.map(item => item.label).join(', ') 
            : 'None'}
        </div>
      </section>
    </div>
  );
};

export default DropdownDemo;