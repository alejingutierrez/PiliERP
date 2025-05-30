import React from 'react';
import { Box, Typography } from '@mui/material';
import AppCard from '../atoms/AppCard';

const Page = ({ title, actions, children }) => (
  <Box sx={{ maxWidth: 900, mx: 'auto' }}>
    <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3 }}>
      {title}
    </Typography>
    <AppCard>
      {actions && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          {actions}
        </Box>
      )}
      {children}
    </AppCard>
  </Box>
);

export default Page;
