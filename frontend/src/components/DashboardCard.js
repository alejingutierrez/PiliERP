import React from 'react';
import { Typography, Box } from '@mui/material';
import AppCard from '../atoms/AppCard';
import AppTooltip from '../atoms/AppTooltip';

const DashboardCard = ({ title, description, icon: Icon }) => (
  <AppTooltip title={description} placement="top">
    <AppCard
      sx={(theme) => ({
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        height: 180,
        cursor: 'pointer',
        transition: 'box-shadow 0.2s',
        '&:hover': {
          boxShadow: theme.shadows[3],
        },
      })}
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
    </AppCard>
  </AppTooltip>
);

export default DashboardCard;
