import React from 'react';
import MaterialCard from '../molecules/MaterialCard';
import { Box, Typography } from '@mui/material';

const MaterialCardTestPage = () => {
  const handleAction1 = () => {
    alert('Action 1 clicked!');
  };

  const handleAction2 = () => {
    alert('Action 2 clicked!');
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Material Card Test Page
      </Typography>

      <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 3 }}>
        Card with Action
      </Typography>
      <MaterialCard
        title="Card with Action Button"
        content="This card includes an action button. Clicking it should trigger an alert."
        actionText="Click Me"
        onActionClick={handleAction1}
      />

      <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 5 }}>
        Card without Action
      </Typography>
      <MaterialCard
        title="Card without Action Button"
        content="This card does not have an action button and should not display one."
      />

      <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 5 }}>
        Another Card with Action
      </Typography>
      <MaterialCard
        title="Yet Another Card"
        content="This is another example of a card with an action button."
        actionText="Do Something Else"
        onActionClick={handleAction2}
      />
    </Box>
  );
};

export default MaterialCardTestPage;
