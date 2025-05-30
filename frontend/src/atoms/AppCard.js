import React from 'react';
import Paper from '@mui/material/Paper';

const AppCard = ({ children, sx = {}, ...props }) => (
  <Paper
    elevation={1}
    {...props}
    sx={{
      p: 4,
      backgroundColor: 'background.paper',
      // borderRadius, border, and boxShadow removed to inherit from theme
      ...sx,
    }}
  >
    {children}
  </Paper>
);

export default AppCard;
