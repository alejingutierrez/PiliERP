import React from 'react';
import MuiAlert from '@mui/material/Alert';
// No specific styling needed with `styled` for this atom,
// as MUI Alert handles props directly and provides variants.

const AlertAtom = ({
  severity = 'info', // 'error', 'warning', 'info', 'success'
  variant = 'standard', // 'standard', 'filled', 'outlined'
  children,
  action, // Optional: e.g., <Button color="inherit" size="small">UNDO</Button>
  onClose, // Optional: function to call when alert is closed
  ...props // To pass any other valid MuiAlert props
}) => {
  return (
    <MuiAlert
      severity={severity}
      variant={variant}
      action={action}
      onClose={onClose} // MUI Alert will render a close button if onClose is provided and no custom action overrides it
      {...props}
    >
      {children}
    </MuiAlert>
  );
};

export default AlertAtom;
