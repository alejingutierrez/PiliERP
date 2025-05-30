import React from 'react';
import { Box, Typography } from '@mui/material';
import PrimaryButton from '../atoms/PrimaryButton';

const EmptyState = ({ icon: Icon, title, description, actionLabel, onAction }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      minHeight: 280,
      gap: 4,
    }}
  >
    {Icon && <Icon sx={{ fontSize: 32, color: '#8C9196' }} />}
    <Typography
      sx={{ fontSize: 14, fontWeight: 600, color: '#202223' }}
    >
      {title}
    </Typography>
    {description && (
      <Typography
        sx={{ fontSize: 13, color: '#6D7175', maxWidth: 360, textAlign: 'center' }}
      >
        {description}
      </Typography>
    )}
    {actionLabel && (
      <PrimaryButton onClick={onAction}>{actionLabel}</PrimaryButton>
    )}
  </Box>
);

export default EmptyState;
