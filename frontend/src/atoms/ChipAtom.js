import React from 'react';
import MuiChip from '@mui/material/Chip';

// No specific styling needed with `styled` for this atom,
// as MUI Chip handles props directly and themes accordingly.

const ChipAtom = ({
  label,
  variant = 'filled', // 'filled', 'outlined'
  color = 'default', // 'primary', 'secondary', 'default', 'error', 'success', 'warning'
  size = 'medium', // 'small', 'medium'
  icon, // element
  avatar, // element
  onDelete, // function
  onClick, // function
  ...props // To pass any other valid MuiChip props
}) => {
  return (
    <MuiChip
      label={label}
      variant={variant}
      color={color}
      size={size}
      icon={icon}
      avatar={avatar}
      onDelete={onDelete}
      onClick={onClick}
      clickable={!!onClick} // Make chip appear clickable if onClick is provided
      {...props}
    />
  );
};

export default ChipAtom;
