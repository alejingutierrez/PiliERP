import React, { useId } from 'react';
import PropTypes from 'prop-types';
import { MWCSwitch } from '../mwc_wrappers/MWCSwitch';

/**
 * SwitchInput provides a switch toggle with a label, using MWCSwitch.
 */
const SwitchInput = ({
  label,
  checked, // MUI uses 'checked', MWC Switch uses 'selected'
  onChange,
  disabled = false,
  name,
  value, // MWC Switch has a 'value' attribute
  required = false,
  showOnlySelectedIcon = false, // MWC specific: if true, shows icon only when selected
  icons = false, // MWC specific: if true, shows default on/off icons
  ...props
}) => {
  const autoId = useId();
  const switchId = props.id || autoId;

  // The MWCSwitch wrapper maps its 'change' event to the onChange prop.
  // The native event.target for md-switch will have a 'selected' property.
  const handleChange = (event) => {
    if (onChange) {
      // MUI Switch onChange usually passes (event, checked_boolean)
      // MWC Switch event.target.selected is the new state.
      onChange(event, event.target.selected);
    }
  };

  return (
    <div
      style={{
        display: 'inline-flex', // Use inline-flex for better flow with other elements
        alignItems: 'center',
        cursor: disabled ? 'default' : 'pointer',
        // Adding some gap between switch and label if label exists
        gap: label ? '8px' : '0px',
      }}
      // Allow clicking the div to toggle the switch, mainly for the label area
      onClick={(e) => {
        // Prevent click if it's on the switch itself to avoid double toggle
        // or if the click is on any interactive element within the div already.
        if (!disabled && e.target === e.currentTarget) { // Only if the click is directly on the div
          const switchElement = document.getElementById(switchId);
          switchElement?.click(); // Programmatic click triggers the switch's own event handling
        }
      }}
    >
      <MWCSwitch
        id={switchId}
        selected={checked} // Map 'checked' to 'selected'
        onChange={handleChange} // The wrapper ensures this is the correct prop name for the 'change' event
        disabled={disabled}
        name={name}
        value={value} // Pass value if used (e.g. in forms)
        required={required} // Pass required if used
        icons={icons} // MWC specific prop
        showOnlySelectedIcon={showOnlySelectedIcon} // MWC specific prop
        {...props} // Pass other MWC specific props
      />
      {label && (
        <label
          htmlFor={switchId} // Associates label with switch
          style={{
            cursor: disabled ? 'default' : 'pointer',
            // Prevent text selection on double click if desired
            userSelect: 'none',
          }}
          // The div's onClick handles toggling when clicking the label area.
          // No separate onClick needed on label itself if it's part of the clickable div.
          // If label click needs to be handled separately (e.g. to prevent div's action),
          // then add onClick={(e) => e.stopPropagation()} here.
          // For simplicity, letting the div's click handler manage it.
        >
          {label}
        </label>
      )}
    </div>
  );
};

SwitchInput.propTypes = {
  label: PropTypes.string,
  /**
   * If true, the switch is checked (selected).
   */
  checked: PropTypes.bool,
  /**
   * Callback fired when the state changes.
   * @param {object} event The event source of the callback.
   * @param {boolean} selected The `selected` (checked) value of the switch.
   */
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  /**
   * The value of the component.
   */
  value: PropTypes.string,
  required: PropTypes.bool,
  id: PropTypes.string,
  /**
   * MWC Specific: Shows the icon only when selected.
   */
  showOnlySelectedIcon: PropTypes.bool,
  /**
   * MWC Specific: Shows the default on/off icons.
   */
  icons: PropTypes.bool,
};

export default SwitchInput;
