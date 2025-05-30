import React from 'react';
import { Box, Typography } from '@mui/material';
import AppCard from '../atoms/AppCard';

const Page = ({ title, actions, children }) => (
  <Box>
    <Typography variant="h1" component="h1" gutterBottom sx={{ mb: 3 }}>
      {title}
    </Typography>
    <AppCard>
      {actions && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'flex-end',
            mb: 2,
            '& > *': { mr: { sm: 1 }, mb: { xs: 1, sm: 0 } },
          }}
        >
          {actions}
        </Box>
      )}
      {children}
    </AppCard>
  </Box>
);

export default Page;
