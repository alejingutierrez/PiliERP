import React from 'react';
import Button from '@mui/material/Button';

const PrimaryButton = ({ children, ...props }) => (
  <Button
    variant="contained"
    color="primary"
    disableElevation
    {...props}
    sx={{
      borderRadius: 4,
      textTransform: 'none',
      fontWeight: 600,
      height: 28,
      px: '12px',
      ...props.sx,
    }}
  >
    {children}
  </Button>
);

export default PrimaryButton;
