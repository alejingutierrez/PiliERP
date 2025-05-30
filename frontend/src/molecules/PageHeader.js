import React from 'react';
import { Box, Typography, Button } from '@mui/material';
// We'll use the PrimaryButton we just defined if an action button is needed
// import PrimaryButton from '../atoms/PrimaryButton'; 

const PageHeader = ({ title, actionButtonText, onActionButtonClick, actionButtonIcon }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {title}
      </Typography>
      {/* Conditionally render the button if text and handler are provided */}
      {actionButtonText && onActionButtonClick && (
        // If you create and import PrimaryButton, use it here:
        // <PrimaryButton startIcon={actionButtonIcon} onClick={onActionButtonClick}>
        //   {actionButtonText}
        // </PrimaryButton>
        // For now, sticking to a direct Button to avoid inter-dependency issues if PrimaryButton is not found by worker
         <Button
           variant="contained"
           color="primary"
           startIcon={actionButtonIcon}
           onClick={onActionButtonClick}
         >
           {actionButtonText}
         </Button>
      )}
    </Box>
  );
};

export default PageHeader;
