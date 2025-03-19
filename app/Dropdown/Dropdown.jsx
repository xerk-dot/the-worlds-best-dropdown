import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.css';

const Dropdown = ({
  /**
   * 
   The component offers a flexible API through these configurable props:
    
        options: Array of options to display
        placeholder: Customizable text for empty state
        multiple: Boolean toggle between single/multi-select modes
        value: Current selection(s)
        onChange: Callback for handling selection changes
        maxHeight: Control the maximum height of the dropdown list

  This flexibility allows developers to:

        Use the same component for both single and multi-select needs
        Customize the appearance and behavior
        Integrate it into various applications with different requirements
        Control all aspects of the dropdown's state and behavior */
  options = [],
  placeholder = 'Select...',
  multiple = false,
  value = multiple ? [] : null,
  onChange,
  maxHeight = 300,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // Create a style variable with the maxHeight
  const dropdownListStyle = {
    '--dropdown-max-height': `${maxHeight}px`,
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    if (multiple) {
      // For multi-select
      const isSelected = value.some(item => item.value === option.value);
      
      let newValue;
      if (isSelected) {
        // Remove if already selected
        newValue = value.filter(item => item.value !== option.value);
      } else {
        // Add if not selected
        newValue = [...value, option];
      }
      
      onChange(newValue);
    } else {
      // For single select
      onChange(option);
      setIsOpen(false); // Close dropdown after selection for single select
    }
  };

  const selectAll = () => {
    if (!multiple) return;
    onChange([...options]);
  };

  const deselectAll = () => {
    if (!multiple) return;
    onChange([]);
  };

  const isOptionSelected = (option) => {
    if (multiple) {
      return value.some(item => item.value === option.value);
    }
    return value !== null && value.value === option.value;
  };

  const displayValue = () => {
    if (!value || (multiple && value.length === 0)) {
      return placeholder;
    }

    if (multiple) {
      if (value.length === 1) {
        return value[0].label;
      }
      return `${value.length} items selected`;
    }

    return value.label;
  };

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        <div className="dropdown-selected-value">{displayValue()}</div>
        <div className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</div>
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {multiple && (
            <div className="dropdown-select-actions">
              <button type="button" onClick={selectAll}>Select All</button>
              <button type="button" onClick={deselectAll}>Deselect All</button>
            </div>
          )}
          <div className="dropdown-options-list" style={dropdownListStyle}>
            {options.map((option) => (
              <div
                key={option.value}
                className={`dropdown-option ${isOptionSelected(option) ? 'selected' : ''}`}
                onClick={() => handleOptionClick(option)}
              >
{/* 
 The dropdown purely reflects what's in singleValue and calls setSingleValue when changes occur, making it fully controlled.
*/}
                {multiple && (
                  <input
                    type="checkbox"
                    checked={isOptionSelected(option)}
                    onChange={() => {}}
                    onClick={(e) => e.stopPropagation()}
                  />
                )}
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;