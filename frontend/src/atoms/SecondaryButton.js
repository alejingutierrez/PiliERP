import React from 'react';
import PropTypes from 'prop-types';
import { MWCOutlinedButton } from '../mwc_wrappers/MWCOutlinedButton';

/**
 * SecondaryButton is a wrapper around the MWCOutlinedButton component.
 * It's intended for secondary actions that need less emphasis than primary actions.
 */
const SecondaryButton = ({ children, onClick, disabled = false, type = 'button', ...props }) => {
  return (
    <MWCOutlinedButton
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </MWCOutlinedButton>
  );
};

SecondaryButton.propTypes = {
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

export default SecondaryButton;
