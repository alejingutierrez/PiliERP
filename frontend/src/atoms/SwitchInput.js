import React from 'react';
import Switch from '@mui/material/Switch';

const SwitchInput = (props) => (
  <Switch
    color="primary"
    sx={{
      '& .MuiSwitch-switchBase': {
        padding: 1,
      },
      '& .MuiSwitch-thumb': {
        boxShadow: 'none',
      },
      ...props.sx,
    }}
    {...props}
  />
);

export default SwitchInput;
