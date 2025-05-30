import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const Page = ({ title, actions, children }) => (
  <Box>
    <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3 }}>
      {title}
    </Typography>
    <Paper
      sx={(theme) => ({
        p: 3,
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[1],
        border: `1px solid ${theme.palette.divider}`,
      })}
    >
      {actions && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          {actions}
        </Box>
      )}
      {children}
    </Paper>
  </Box>
);

export default Page;
