import React from 'react';
import MaterialCard from '../molecules/MaterialCard';
import { Box, Typography, Grid } from '@mui/material';

const DashboardPage = () => {
  const handleCardAction = () => {
    alert('Dashboard card action clicked!');
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard Overview
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6} md={4}>
          <MaterialCard
            title="Feature Update"
            content="Check out the latest features and improvements we've rolled out this month."
            actionText="Learn More"
            onActionClick={handleCardAction}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <MaterialCard
            title="System Status"
            content="All systems are currently operational and running smoothly."
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <MaterialCard
            title="User Statistics"
            content="Monthly active users are up by 15% compared to last month."
            actionText="View Details"
            onActionClick={() => alert('User stats details!')}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage;
