import React from 'react';
import Button from '@mui/material/Button';

const SecondaryButton = ({ children, ...props }) => (
  <Button
    variant="outlined"
    color="primary"
    {...props}
    sx={{
      borderRadius: 3,
      textTransform: 'none',
      fontWeight: 600,
      px: 2,
      py: 1,
      ...props.sx,
    }}
  >
    {children}
  </Button>
);

export default SecondaryButton;
