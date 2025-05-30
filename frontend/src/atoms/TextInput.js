import React from 'react';
import { MdOutlinedTextField } from '@material/web/all.js';
import { MdIcon } from '@material/web/all.js'; // For adornments

const TextInput = ({
  label,
  value,
  onChange,
  disabled,
  error,
  helperText,
  type,
  InputProps,
  fullWidth,
  sx = {},
  size, // size="small" from MUI, not directly applicable, but captured
  variant, // variant="outlined" from MUI, handled by component choice
  ...otherProps // Catch any other MUI specific props that don't map
}) => {
  const { borderRadius, ...otherSxFromProps } = sx;

  const style = {
    '--md-outlined-text-field-container-shape': borderRadius || '10px', // Guideline or sx
    width: fullWidth ? '100%' : undefined,
    ...otherSxFromProps,
  };

  // Handle adornments from InputProps
  let leadingIconSlot = null;
  if (InputProps?.startAdornment) {
    // Simplistic handling: if it's a string, assume it's an icon name.
    // If it's a React element, it might need more complex wrapping or may not be compatible.
    if (typeof InputProps.startAdornment === 'string') {
      leadingIconSlot = <MdIcon slot="leading-icon">{InputProps.startAdornment}</MdIcon>;
    } else if (React.isValidElement(InputProps.startAdornment)) {
      // Attempt to render, but might not be styled correctly or could be complex
      leadingIconSlot = <div slot="leading-icon">{InputProps.startAdornment}</div>;
    }
  }

  let trailingIconSlot = null;
  if (InputProps?.endAdornment) {
    if (typeof InputProps.endAdornment === 'string') {
      trailingIconSlot = <MdIcon slot="trailing-icon">{InputProps.endAdornment}</MdIcon>;
    } else if (React.isValidElement(InputProps.endAdornment)) {
      trailingIconSlot = <div slot="trailing-icon">{InputProps.endAdornment}</div>;
    }
  }

  // The `onChange` for MdOutlinedTextField usually fires 'input' or 'change'
  // The event detail often has `event.target.value`.
  // MUI's TextField onChange also provides event.target.value.
  // So, direct pass-through of onChange should be mostly fine.
  // If a more specific event structure was expected, this would need adaptation.

  return (
    <MdOutlinedTextField
      label={label}
      value={value}
      onInput={onChange} // Or onChange, depending on MWC best practice for React wrappers
      disabled={disabled}
      error={error}
      errorText={error && helperText ? helperText : undefined}
      supportingText={!error && helperText ? helperText : undefined}
      type={type}
      style={style}
      {...otherProps} // Spread other props like 'name', 'placeholder'
    >
      {leadingIconSlot}
      {trailingIconSlot}
    </MdOutlinedTextField>
  );
};

export default TextInput;
