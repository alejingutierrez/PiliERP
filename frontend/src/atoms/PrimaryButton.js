import React from 'react';
import Button from '@mui/material/Button';

const PrimaryButton = ({ children, ...props }) => (
  <Button
    variant="contained"
    color="primary"
    disableElevation
    {...props}
    sx={{
      // borderRadius removed to inherit from MuiButton styleOverrides in theme
      ...props.sx,
    }}
  >
    {children}
  </Button>
);

export default PrimaryButton;
