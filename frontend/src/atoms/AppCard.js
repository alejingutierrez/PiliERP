import React from 'react';
import Paper from '@mui/material/Paper';

const AppCard = ({ children, sx = {}, ...props }) => (
  <Paper
    elevation={0}
    {...props}
    sx={{
      p: 3,
      borderRadius: 3,
      backgroundColor: 'background.paper',
      border: (theme) => `1px solid ${theme.palette.divider}`,
      boxShadow: (theme) => theme.shadows[1],
      ...sx,
    }}
  >
    {children}
  </Paper>
);

export default AppCard;
