import React from 'react';
import Tooltip from '@mui/material/Tooltip';

const AppTooltip = ({ children, title, placement = 'bottom', ...props }) => {
  if (!title) {
    return <>{children}</>;
  }

  return (
    <Tooltip title={title} placement={placement} {...props}>
      {/* MUI Tooltip expects a single child element that can accept event handlers.
          If children is a custom component, it must forward refs.
          If children might be a string or number, it needs to be wrapped in a <span>.
          For now, assume children is a single valid React element. */}
      {children}
    </Tooltip>
  );
};

export default AppTooltip;
