import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import AppTooltip from '../atoms/AppTooltip';

const DashboardCard = ({ title, description, icon: Icon }) => (
  <AppTooltip title={description} placement="top">
    <Paper
      sx={(theme) => ({
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        height: 180,
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[1],
        border: `1px solid ${theme.palette.divider}`,
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
    </Paper>
  </AppTooltip>
);

export default DashboardCard;
