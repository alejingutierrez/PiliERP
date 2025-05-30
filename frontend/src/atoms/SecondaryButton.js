import React from 'react';
import Button from '@mui/material/Button';

const SecondaryButton = ({ children, ...props }) => (
  <Button
    variant="outlined"
    color="primary"
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

export default SecondaryButton;
