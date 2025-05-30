import React from 'react';
import PropTypes from 'prop-types';
import { MWCFilledButton } from '../mwc_wrappers/MWCFilledButton';

/**
 * PrimaryButton is a wrapper around the MWCFilledButton component.
 * It's intended for primary actions.
 */
const PrimaryButton = ({ children, onClick, disabled = false, type = 'button', ...props }) => {
  return (
    <MWCFilledButton
      onClick={onClick}
      disabled={disabled}
      type={type} // Allow passing button type e.g. "submit"
      {...props} // Spread any other props like 'aria-label', custom styles if necessary (though theme should handle most)
    >
      {children}
    </MWCFilledButton>
  );
};

PrimaryButton.propTypes = {
  /**
   * The content of the button.
   */
  children: PropTypes.node.isRequired,
  /**
   * Function to call when the button is clicked.
   */
  onClick: PropTypes.func,
  /**
   * If true, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * The type of the button (e.g., "button", "submit", "reset").
   */
  type: PropTypes.string,
};

export default PrimaryButton;
