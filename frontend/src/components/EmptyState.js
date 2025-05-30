import React from 'react';
import { Box, Typography } from '@mui/material';
import PrimaryButton from '../atoms/PrimaryButton';

const EmptyState = ({ icon: Icon, title, description, actionLabel, onAction }) => (
  <Box sx={{ textAlign: 'center', py: 6 }}>
    {Icon && <Icon sx={{ fontSize: 64, color: 'text.disabled', mb: 2 }} />}
    <Typography variant="h6" component="h2" gutterBottom>
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
