import React from 'react';
import Tooltip from '@mui/material/Tooltip';

const AppTooltip = ({ children, ...props }) => (
  <Tooltip arrow {...props}>
    {children}
  </Tooltip>
);

export default AppTooltip;
