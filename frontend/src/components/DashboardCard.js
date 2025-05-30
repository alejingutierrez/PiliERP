import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const DashboardCard = ({ title, description, icon: Icon }) => (
  <Paper
    sx={{
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      height: 180,
      borderRadius: (theme) => theme.shape.borderRadius,
      boxShadow: (theme) => theme.shadows[1],
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
      {Icon && <Icon color="primary" sx={{ mr: 1 }} />}
      <Typography variant="h6" component="h2" gutterBottom>
        {title}
      </Typography>
    </Box>
    <Typography variant="body2" color="text.secondary">
      {description}
    </Typography>
  </Paper>
);

export default DashboardCard;
