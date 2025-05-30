import React from 'react';
import { MdFilledButton } from '@material/web/all.js';

const PrimaryButton = ({ children, sx = {}, ...props }) => {
  // Combine sx from props with default styles from guidelines
  const style = {
    fontWeight: '600',
    textTransform: 'none',
    borderRadius: '10px', // As per DESIGN_GUIDELINES.md global border radius
    // Spread sx from props, allowing overrides
    ...sx,
  };

  return (
    <MdFilledButton style={style} {...props}>
      {children}
    </MdFilledButton>
  );
};

export default PrimaryButton;
