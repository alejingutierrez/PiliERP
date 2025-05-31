import React, { useId } from 'react';
import PropTypes from 'prop-types';
import { MWCCheckbox } from '../mwc_wrappers/MWCCheckbox';

/**
 * CheckboxInput provides a checkbox with a label, using MWCCheckbox.
 */
const CheckboxInput = ({
  label,
  checked,
  onChange,
  disabled = false,
  name,
  value,
  indeterminate = false,
  required = false,
  ...props
}) => {
  const autoId = useId(); // Generate a unique ID for associating label and checkbox
  const checkboxId = props.id || autoId;

  // The MWCCheckbox wrapper maps its 'change' event to the onChange prop.
  // The native event.target for md-checkbox will have a 'checked' property.
  const handleChange = (event) => {
    if (onChange) {
      // Construct a synthetic event or pass enough info for compatibility if needed.
      // For MUI, onChange often received (event, checked).
      // Here, event.target.checked is the new state.
      onChange(event, event.target.checked);
    }
  };

  // Make the entire component (div) clickable to toggle the checkbox
  const handleContainerClick = () => {
    if (!disabled) {
      const checkboxElement = document.getElementById(checkboxId);
      if (checkboxElement) {
        checkboxElement.click();
        // Clicking the checkbox programmatically will trigger its own 'change' event,
        // which in turn calls our `handleChange` function.
      }
    }
  };

  return (
    <div
      style={{
        display: 'inline-flex', // Changed from flex to inline-flex for better layout flow with other elements
        alignItems: 'center',
        cursor: disabled ? 'default' : 'pointer',
        // Add some margin to the component itself if it's a block, or let parent handle spacing
        // margin: '8px 0'
      }}
      onClick={handleContainerClick}
    >
      <MWCCheckbox
        id={checkboxId}
        checked={checked} // Ensure this prop is correctly passed and controls the state
        indeterminate={indeterminate}
                               // However, createComponent maps it to `onChange`, so this should be `onChange`
        onChange={handleChange} // Correctly use the mapped event from createComponent
        disabled={disabled}
        name={name}
        value={value} // Pass value if it's used (e.g. in forms)
        required={required}
        {...props}
      />
      {label && (
        <label
          htmlFor={checkboxId} // Associates label with checkbox for accessibility and clickability
          // id={`${checkboxId}-label`} // Not strictly needed if htmlFor is used correctly
          style={{
            marginLeft: '4px', // Adjust spacing as needed
            cursor: disabled ? 'default' : 'pointer'
          }}
          // Prevent label click from triggering two events if div also clicks checkbox
          onClick={(e) => e.stopPropagation()}
        >
          {label}
        </label>
      )}
    </div>
  );
};

CheckboxInput.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  /**
   * Callback fired when the state changes.
   * @param {object} event The event source of the callback.
   * @param {boolean} checked The `checked` value of the checkbox.
   */
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.any, // string, number, bool
  indeterminate: PropTypes.bool,
  required: PropTypes.bool,
  id: PropTypes.string, // Allow passing an explicit id
};

export default CheckboxInput;
