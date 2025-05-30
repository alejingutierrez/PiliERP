import React from 'react';
import MuiDivider from '@mui/material/Divider';

// No specific styling needed with `styled` for this atom,
// as MUI Divider handles props directly and uses theme.palette.divider by default.

const DividerAtom = ({
  orientation = 'horizontal',
  variant = 'fullWidth',
  textAlign, // Only applicable if children are provided
  children,
  ...props // To pass any other valid MuiDivider props
}) => {
  return (
    <MuiDivider
      orientation={orientation}
      variant={variant}
      textAlign={children ? textAlign : undefined} // Apply textAlign only if children exist
      {...props}
    >
      {children}
    </MuiDivider>
  );
};

export default DividerAtom;
