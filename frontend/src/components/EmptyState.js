import React from 'react';
import { Box, Typography } from '@mui/material';
import PrimaryButton from '../atoms/PrimaryButton';

const EmptyState = ({ icon: Icon, title, description, actionLabel, onAction }) => (
  <Box sx={{ textAlign: 'center', py: 6, '&:hover': { boxShadow: '0 1px 0 rgba(0,0,0,0.05)' } }}>
    {Icon && <Icon sx={{ fontSize: 32, color: '#8C9196', mb: 2 }} />}
    <Typography variant="subtitle2" component="h2" gutterBottom color="text.secondary">
      {title}
    </Typography>
    {description && (
      <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 280, mx: 'auto', mb: 3 }}>
        {description}
      </Typography>
    )}
    {actionLabel && (
      <PrimaryButton onClick={onAction} sx={{ mt: 1 }}>
        {actionLabel}
      </PrimaryButton>
    )}
  </Box>
);

export default EmptyState;
