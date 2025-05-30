import React from 'react';
import Button from '@mui/material/Button';

const PrimaryButton = ({ children, ...props }) => (
  <Button
    variant="contained"
    color="primary"
    disableElevation
    {...props}
    sx={{
      borderRadius: 6,
      textTransform: 'none',
      fontWeight: 600,
      height: 36,
      px: '16px',
      ...props.sx,
    }}
  >
    {children}
  </Button>
);

export default PrimaryButton;
