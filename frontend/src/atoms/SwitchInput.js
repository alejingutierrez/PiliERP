import React from 'react';
import { MdSwitch } from '@material/web/all.js';

const SwitchInput = ({ label, id, checked, onChange, disabled, sx = {}, ...props }) => {
  const internalId = id || `switch-${React.useId()}`;
  // sx properties like padding and boxShadow on thumb are not directly translatable
  // to MdSwitch in the same way. MdSwitch has its own visual language.
  // We pass the sx to the outer div for general layout styling.
  // Specific MdSwitch theming would be done via CSS custom properties at a global level.

  const handleChange = (event) => {
    if (onChange) {
      // Adapt MdSwitch event (event.target.selected) to what a typical React onChange might expect (event.target.checked)
      // However, it's often better to stick to the web component's event structure if possible.
      // For this migration, let's assume the calling code expects an object with target.checked.
      // If the original onChange expected the raw event or just the boolean, this needs adjustment.
      const syntheticEvent = {
        ...event,
        target: { ...event.target, checked: event.target.selected },
      };
      onChange(syntheticEvent);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', ...sx }}>
      <MdSwitch
        id={internalId}
        selected={checked} // MdSwitch uses 'selected' instead of 'checked'
        onInput={handleChange} // MdSwitch often uses 'input' or 'change'. 'input' is common for immediate value changes.
        disabled={disabled}
        {...props} // Pass other props
      />
      {label && (
        <label htmlFor={internalId} style={{ marginLeft: '8px', cursor: disabled ? 'default' : 'pointer' }}>
          {label}
        </label>
      )}
    </div>
  );
};

export default SwitchInput;
