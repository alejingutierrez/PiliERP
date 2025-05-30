import React from 'react';
import MuiBadge from '@mui/material/Badge';
// No specific styling needed with `styled` for this atom, as MUI Badge handles props directly.

const BadgeAtom = ({
  badgeContent,
  color = 'default',
  variant = 'standard',
  max = 99,
  children,
  ...props // To pass any other valid MuiBadge props
}) => {
  return (
    <MuiBadge
      badgeContent={badgeContent}
      color={color}
      variant={variant}
      max={max}
      {...props}
    >
      {children}
    </MuiBadge>
  );
};

export default BadgeAtom;
