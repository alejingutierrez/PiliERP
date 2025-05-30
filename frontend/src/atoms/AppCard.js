import React from 'react';
import Paper from '@mui/material/Paper';

const AppCard = ({ children, sx = {}, ...props }) => (
  <Paper
    elevation={0}
    {...props}
    sx={{
      p: 3,
      borderRadius: 8,
      backgroundColor: 'background.paper',
      border: '1px solid #E0E0E0',
      boxShadow: '0 0 0 1px rgba(0,0,0,0.05)',
      ...sx,
    }}
  >
    {children}
  </Paper>
);

export default AppCard;
