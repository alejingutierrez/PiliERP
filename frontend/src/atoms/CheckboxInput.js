import React from 'react';
import { MdCheckbox } from '@material/web/all.js';

const CheckboxInput = ({ label, id, checked, onChange, disabled, sx = {}, ...props }) => {
  const internalId = id || `checkbox-${React.useId()}`;
  const { fontSize, ...otherSx } = sx; // Extract fontSize if needed for checkbox, apply rest to wrapper

  // MdCheckbox size can be controlled by --md-checkbox-icon-size
  // The sx prop '& .MuiSvgIcon-root': { fontSize: 20 } would translate to setting this CSS var.
  // For simplicity, we'll pass otherSx to the wrapper. Specific styling like icon size
  // would ideally be part of a global theme for MWC or applied directly via style if critical.
  const checkboxStyle = fontSize ? { '--md-checkbox-icon-size': fontSize } : {};


  return (
    <div style={{ display: 'flex', alignItems: 'center', ...otherSx }}>
      <MdCheckbox
        id={internalId}
        checked={checked}
        onChange={onChange} // Assumes onChange expects the event directly
        disabled={disabled}
        style={checkboxStyle}
        {...props} // Pass other props like aria-labelledby
      />
      {label && (
        <label htmlFor={internalId} style={{ marginLeft: '8px', cursor: disabled ? 'default' : 'pointer' }}>
          {label}
        </label>
      )}
    </div>
  );
};

export default CheckboxInput;
