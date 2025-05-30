import React from 'react';
import { MdOutlinedButton } from '@material/web/all.js';

const SecondaryButton = ({ children, sx = {}, ...props }) => {
  // Extract specific sx props and provide defaults from original component/guidelines
  const {
    borderRadius = '10px', // DESIGN_GUIDELINES.md global border radius (was 6 -> 24px or 6px?)
    textTransform = 'none',
    fontWeight = '600',
    height = '36px',
    px, // Specific padding from original sx
    paddingLeft = px || '16px', // if px is '16px', this becomes '16pxpx' - needs fix
    paddingRight = px || '16px', // if px is '16px', this becomes '16pxpx' - needs fix
    ...otherSx // Capture any other sx properties
  } = sx;

  // Correctly handle px shorthand for padding
  let finalPaddingLeft = paddingLeft;
  let finalPaddingRight = paddingRight;

  if (px && typeof px === 'string' && !px.endsWith('px') && !isNaN(parseFloat(px))) {
    finalPaddingLeft = `${px}px`; // Assuming px was a number or string number
    finalPaddingRight = `${px}px`;
  } else if (px && typeof px === 'string') {
    finalPaddingLeft = px; // px is already a string like '16px'
    finalPaddingRight = px;
  }


  const style = {
    fontWeight,
    textTransform,
    borderRadius,
    height,
    paddingLeft: finalPaddingLeft,
    paddingRight: finalPaddingRight,
    // Spread otherSx from props, allowing overrides
    ...otherSx,
  };

  return (
    <MdOutlinedButton style={style} {...props}>
      {children}
    </MdOutlinedButton>
  );
};

export default SecondaryButton;
