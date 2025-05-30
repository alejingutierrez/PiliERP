import React from 'react';
import PropTypes from 'prop-types';
import { MWCOutlinedTextField } from '../mwc_wrappers/MWCOutlinedTextField';

/**
 * TextInput is a wrapper around the MWCOutlinedTextField component,
 * providing a standardized text input field.
 */
const TextInput = ({
  label,
  value,
  onChange,
  onInput, // Allow passing onInput for more immediate feedback if needed
  disabled = false,
  placeholder,
  type = 'text',
  name,
  error = false,
  helperText, // This will be mapped to supporting-text or error-text
  required = false,
  readOnly = false,
  // MWC specific attributes might be useful:
  // icon, iconTrailing, prefixText, suffixText,
  // minLength, maxLength, pattern, min, max, step
  ...props // For any other MWC text-field specific attributes
}) => {

  // MWC text fields use event.target.value for changes.
  // The MWCOutlinedTextField wrapper maps MWC's 'input' event to its `onInput` prop,
  // and MWC's 'change' event to its `onChange` prop.

  // For this TextInput component, we want `onChange` to be the primary way to handle value updates
  // for controlled component behavior, similar to how MUI's TextField `onChange` works (fires on every value change).
  // MWC's `input` event is the one that fires on every value change.
  // MWC's `change` event typically fires on blur or Enter.

  // So, we map this component's `onChange` prop to the wrapper's `onInput` prop.
  // If the user also provides an `onInput` prop to this TextInput, it will also be called.
  const handleInput = (event) => {
    if (onChange) {
      onChange(event.target.value); // Call the user's onChange for controlled behavior
    }
    if (onInput) {
      onInput(event); // Call the user's onInput if they provided one
    }
  };

  return (
    <MWCOutlinedTextField
      label={label}
      value={value || ''} // MWC fields often need a defined value, ensure it's not null/undefined
      type={type}
      name={name}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      readOnly={readOnly} // maps to readonly attribute
      error={error} // MWC uses this boolean attribute for error state
      supportingText={!error && helperText ? helperText : undefined}
      errorText={error && helperText ? helperText : undefined} // MWC specific for error message

      // Event handling:
      // Connect our combined handler to the wrapper's onInput (which is MWC 'input' event)
      onInput={handleInput}
      {...props} // Pass other MWC-specific props
    >
      {/* Example of how icons could be passed if this component supported them: */}
      {/* {leadingIcon && <MWCIcon slot="leading-icon">{leadingIcon}</MWCIcon>} */}
      {/* {trailingIcon && <MWCIcon slot="trailing-icon">{trailingIcon}</MWCIcon>} */}
    </MWCOutlinedTextField>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Function to call when the input value changes (on each keystroke).
   * Receives the event; access value via event.target.value.
   * This is mapped to the 'input' event of the MWC text field.
   */
  onChange: PropTypes.func,
  /**
   * Optional: Also fires on each keystroke, same as onChange.
   * Can be used if a separate handler for 'input' is needed alongside `onChange`.
   */
  onInput: PropTypes.func,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  // leadingIcon: PropTypes.string, // Example if we added icon support
  // trailingIcon: PropTypes.string, // Example if we added icon support
};

export default TextInput;
