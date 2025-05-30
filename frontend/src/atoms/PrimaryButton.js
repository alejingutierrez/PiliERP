import React from 'react';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const PrimaryButton = ({ children, startIcon, onClick, sx, ...props }) => {
  const theme = useTheme();
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={startIcon}
      onClick={onClick}
      sx={{
        // Common styles for primary buttons if any, beyond theme defaults
        // For example, you might enforce a specific padding or minimum width
        // marginRight: theme.spacing(1), // Example if it's usually on the right of something
        ...sx, // Allow overriding with sx prop
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
