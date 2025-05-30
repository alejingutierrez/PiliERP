import React from 'react';
import Button from '@mui/material/Button';

const SecondaryButton = ({ children, ...props }) => (
  <Button
    variant="outlined"
    color="primary"
    {...props}
    sx={{
      borderRadius: 4,
      textTransform: 'none',
      fontWeight: 600,
      height: 32,
      px: 2,
      ...props.sx,
    }}
  >
    {children}
  </Button>
);

export default SecondaryButton;
